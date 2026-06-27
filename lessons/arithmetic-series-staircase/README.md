# Arithmetic Series Staircase

A browser-based story deck for explaining arithmetic series through an 8-step staircase made of blocks.

## Core transformation

```text
8-step staircase -> visible duplicate -> slow rotation -> slow move -> snap into rectangle -> divide by 2 -> formula
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

The transformation slide now explicitly labels:

```text
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
```

The blue staircase is first shown directly on top of the yellow staircase, then rotates and moves into the missing space. This is intended to prevent the learner from thinking the blue blocks appear from nowhere.

## Run

Open `index.html` in a browser.

Controls:

- Right arrow / Space / Click: next page
- Left arrow: previous page
- F: fullscreen
- Replay button on the transformation page: replay the copy-rotate-snap animation
