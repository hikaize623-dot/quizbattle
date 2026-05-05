## Add Music & Sound Effects to Scholar Slayer

Wire up four audio cues using free, royalty-free CDN-hosted assets (Pixabay/Mixkit direct mp3 links — no keys, no setup), plus a mute toggle.

### Audio cues
- **Lobby music** — calm/epic ambient loop on the title screen
- **Battle music** — intense combat loop while fighting a boss
- **Hit SFX** — short impact sound on every correct answer (damages boss)
- **Win SFX** — victory fanfare when boss is defeated
- **Lose SFX** — defeat sting when player loses

### Implementation (single file: `public/boss-battle.html`)

1. **Audio manager** (small inline script):
   - Five `Audio` objects: `lobbyMusic`, `battleMusic` (both `loop=true`, volume ~0.4), `hitSfx`, `winSfx`, `loseSfx` (volume ~0.7).
   - Sources from free CDN mp3s (Pixabay CDN / Mixkit direct links).
   - Helper `playMusic(track)` that fades out the current track and starts the new one (avoids overlap).
   - Helper `playSfx(name)` that clones/rewinds the SFX node so rapid hits don't cut each other off.
   - Global `muted` state persisted to `localStorage` (`ss_muted`).

2. **Hook into existing game flow**:
   - On title screen show / "Back to lobby" → `playMusic(lobbyMusic)`.
   - On battle start (when the boss screen mounts) → `playMusic(battleMusic)`.
   - On correct answer (where boss HP is reduced) → `playSfx('hit')`.
   - On boss defeated → stop battle music + `playSfx('win')`.
   - On player defeated → stop battle music + `playSfx('lose')`.

3. **Mute button**:
   - Floating speaker icon (top-right) on both title screen and battle screen.
   - Toggles `muted`, updates icon (🔊 / 🔇), mutes all audio elements, saves to localStorage.
   - Styled to match existing dark/neon theme.

4. **Autoplay handling**:
   - Browsers block autoplay until user interacts. Lobby music will start on the first user click/tap (one-time `pointerdown` listener that kicks off whichever track should be playing).

### Technical notes
- All audio is plain `<audio>`/`Audio()` — no library, no build changes.
- CDN URLs used:
  - Lobby: Pixabay ambient/fantasy loop
  - Battle: Pixabay epic battle loop
  - Hit: Mixkit short impact
  - Win: Mixkit victory fanfare
  - Lose: Mixkit defeat sting
- If a CDN link fails to load, the game still works silently (errors swallowed).
- No changes to React side; everything lives in the standalone `boss-battle.html`.