const express = require("express")
const router = express.Router()
const db = require('../models')



/*
    Post routes
*/

router.post("/", async (req, res, next) => {

  try {

    const title = req.body.title ? req.body.title : "no title"
    const compo = req.body.compo ? req.body.compo : [1, 2, 3]
    const map = req.body.map ? req.body.map : "no map"

    const brawlers = await db.Brawlers.findAll({
      where: {
          id: compo
      }
    })

    const team = await db.Teams.create({
      title: title,
      brawlers: compo.toString(),
      map: map
    })

    await team.setUser(req.user)

    res.format({

      html: function () {
        res.redirect('/teams')
      },

      json: function () {
        res.json(team)
      }
    })

  } catch (Err) {
    next(Err)
  }
})

/*
    Get routes
*/

router.get("/add", async (req, res, next) => {

  res.render("team/form", {
    session: req.session,
    user: req.user,
    title: "Add a team ",
    isNew: true
  })
})

router.get("/:teamId/edit", async (req, res, next) => {

  try {

    const team = await db.Teams.findByPk(req.params.teamId)

    if (team.userId !== req.user.id) {
      throw new Error("Invalid team id")
    }

    res.render("team/form", {
      session: req.session,
      user: req.user,
      title: "Add a team ",
      team: team,
      isNew: false
    })

  } catch (Err) {
    next(Err)
  }

})

router.get("/:teamId", async (req, res, next) => {

  try {

    const team = await db.Teams.findByPk(req.params.teamId)

    const brawlers = await db.Brawlers.findAll({
      where: {
          id: team.brawlers.split(',')
      }
  })

  const map = await db.Maps.findAll({
    where: {
        name: team.map
    }
})


    if (team.userId !== req.user.id) {
      throw new Error("Invalid team id")
    }

    res.format({

      html: () => {
        res.render("team/show", {
          title: team.title,
          team: team,
          brawlers: brawlers,
          map: map,
          session: req.session,
          user: req.user
        })
      },

      json: () => {
        res.json(team)
      }
    })

  } catch (Err) {
    next(Err)
  }
})

router.get("/", async (req, res, next) => {

  try {

    let options = {
      where: {
        userId: req.user.id
      }
    }

    if (req.query.limit) {
      req.query.offset = req.query.offset ? req.query.offset : 0

      options.limit = req.query.limit
      options.offset = req.query.offset
    }
    if (req.query.completion) {
      options.where.completion = req.query.completion
    }

    const teams = await db.Teams.findAndCountAll(options)

    res.format({

      html: () => {
        res.render("team/list", {
          session: req.session,
          user: req.user,
          title: "teams",
          count: teams.count,
          teams: teams.rows
        })
      },

      json: () => {
        res.json(teams)
      }
    })

  } catch (Err) {
    next(Err)
  }
})

/* 
    Delete routes
*/

router.delete("/:teamId", async (req, res, next) => {

  try {

    const result = await db.Teams.destroy({
      where: {
        id: req.params.teamId,
        userId: req.user.id
      }
    }) ? {
      status: "success"
    } : {
      status: "failure"
    }

    res.format({

      html: () => {
        res.redirect('/teams')
      },

      json: () => {
        res.json(result)
      }
    })

  } catch (Err) {
    next(Err)
  }
})

/* 
    Patch routes
*/

router.patch("/:teamId", async (req, res, next) => {

  try {

    let changes = {}
    let where = {
      where: {
        id: req.params.teamId,
        userId: req.user.id
      }
    }

    if (req.body.title) {
      changes.title = req.body.title
    }
    if (req.body.compo) {
      changes.compo = req.body.compo
    }
    if (req.body.map) {
      changes.map = req.body.map
    }
    

    const result = await db.Teams.update(changes, where) ? {
      status: "success"
    } : {
      status: "failure"
    }

    res.format({

      html: function () {
        res.redirect('/teams')
      },

      json: function () {
        res.json(result)
      }
    })

  } catch (Err) {
    next(Err)
  }
})

module.exports = router