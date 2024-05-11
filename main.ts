player.onChat("planeta", function () {
    blocks.fill(
    RED_MUSHROOM_BLOCK,
    pos(40, 0, 40),
    pos(-40, 0, -40),
    FillOperation.Replace
    )
    blocks.fill(
    OBSIDIAN,
    pos(40, 10, 40),
    pos(-40, 10, -40),
    FillOperation.Replace
    )
    for (let index = 0; index < 60; index++) {
        blocks.place(SHROOMLIGHT, randpos(
        pos(40, 10, 40),
        pos(-40, 10, -40)
        ))
    }
    builder.teleportTo(pos(0, 0, 0))
    builder.move(BACK, 40)
    builder.move(RIGHT, 40)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, 80)
        builder.turn(LEFT_TURN)
    }
    builder.raiseWall(OBSIDIAN, 10)
})
