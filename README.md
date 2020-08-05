# Open Podcast Format Specification

## Motivation

Currently (2020 and continue) Podcasting community are using RSS specification from Apple iTunes, and it is de facto standard, but with a lof of disadvantages:

- RSS is not usefull format, it's not easy to parse and it's hard for implementation for backend side, because a lot of languages didnt provide built-in (standart) library for parsing RSS.
- It's common and didn't provide extending like guests page, and etc
- Podcasting is not only audio files, it should have posts / votes and another things in the core.
- No support for declaring information for Podcast creator / Network and another staff

> Without any breaking changes it's not possible to moving forward.

# New Format

## Technical details

- Now default format is JSON, because it's most friendly format for web and every language has built-in/std library for it.

## Features for podcasters

- Multiple avatars in different formats. Podcast can share multiple `Picture` files, for example: one in `mime/jpeg` and one animated in `mime/gif`.
- Multiple audio files in different formats. Podcast can share audio files `Media` in different formats, for example: one in `audio/mpeg`, one in `audio/m4a` and one in `audio/ogg`.
