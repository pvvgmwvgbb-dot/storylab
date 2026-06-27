# Arithmetic Series Staircase

A browser-based story deck for explaining arithmetic series through an 8-step staircase made of blocks.

## Core transformation

```text
8-step staircase -> visible translucent duplicate -> single rotation into place -> rectangle -> divide by 2 -> formula
```

## Teaching goal

Help the learner understand why the sum formula works before memorizing it.

The key idea is visual:

```text
one staircase + one copied staircase = one easy-to-count rectangle
```

For 1 + 2 + ... + 8:

```text
8 rows × 9 blocks per row = 72 blocks
72 ÷ 2 = 36 blocks
```

The learner should see where the second staircase comes from. It is not a new shape; it is a duplicate of the original staircase.

## Transformation slide notes

The transformation slide explicitly labels:

```text
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
```

The blue staircase is first shown directly on top of the yellow staircase with transparency, so the learner can see that there is still a yellow staircase underneath.

Then the blue staircase performs one continuous rotation around a fixed, carefully chosen center. It does not rotate first and then translate. The rotation itself takes the copy directly into the missing space.

The slide also includes speed controls:

```text
slow / medium / fast
```

## Run

Open `index.html` in a browser.

Controls:

- Right arrow / Space / Click: next page
- Left arrow: previous page
- F: fullscreen
- Replay button on the transformation page: replay the copy-rotate-snap animation
- Speed buttons on the transformation page: slow / medium / fast
