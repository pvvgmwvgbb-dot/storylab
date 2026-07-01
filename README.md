# StoryLab

StoryLab is an open framework for transforming abstract knowledge into visual, story-driven learning experiences.

It is not a slide generator. It is not a Canva replacement. It stores the part that matters most: how an invisible idea becomes a visible experience that a learner can understand.

> Teaching is the art of transforming invisible ideas into visible experiences.

## Why StoryLab exists

Most educational materials preserve the final artifact: slides, worksheets, videos, or notes.

StoryLab preserves the teaching transformation:

```text
abstract idea -> story need -> visual scene -> learner action -> discovery -> reusable understanding
```

A good lesson is not only correct. It gives the learner a reason to care, a picture to hold, a problem to solve, and a moment of discovery.

## What this project stores

Each lesson stores:

- the story situation that creates a need for knowledge
- the visual scenes the learner should see
- the questions the teacher should ask
- the cognitive transformation from abstract idea to visible model
- the interaction or action that lets the learner discover the pattern
- the final abstraction that can be reused later

## Runnable lessons

Open any lesson `index.html` in a browser, or serve the repository with a simple local server.

```text
lessons/multiplication-candy/index.html
lessons/multiplication-commutative-array/index.html
lessons/distributive-candy-bags/index.html
lessons/division-monster/index.html
lessons/arithmetic-series-staircase/index.html
lessons/triangle-area-rectangle-cut/index.html
lessons/clock-reading-hands/index.html
```

Browser deck controls:

- Right arrow / Space / Click: next page
- Left arrow: previous page
- F: fullscreen

These decks intentionally use simple emoji and block shapes. The goal is to express the core idea clearly, not to distract the learner with decorative artwork.

## First story source

The first long-form story source is:

```text
lessons/dinosaur-escape-arithmetic-series/
```

It connects Earth history, dinosaurs, and arithmetic series. A child is transported to the dinosaur age and must build a staircase to escape a dinosaur. The math appears because the story requires it.

## Status

StoryLab is at v0.1. The current format is intentionally simple and may change. The goal is to build useful lessons first, then evolve the schema from real use.
