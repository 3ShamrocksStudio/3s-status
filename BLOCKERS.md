# Hard Blockers

Only items Claude genuinely cannot do. Everything else is Claude's to execute.

## 1. Firebase — SHOMER (highest value, 5 minutes)
```
firebase deploy --only database --project shomergency
```
Rules are written and committed. Clears live 401s **and** closes a security hole where
any signed-in user could write to or delete another user's live SOS.
Alternative: send a `firebase login:ci` token and Claude runs it.

## 2. Twilio — SHOMER public launch
Re-enable Verify Fraud Guard → Standard on service `VAa6d1d6e530cbcd67bda268bb22dc0ace`
(disabled 09.07.26 to release a blocked prefix). Not required for the Chabad pilot.

## 3. Brand assets — SHOMER Nature
`nature-hero.jpg` and `nature-badge.png` are referenced but absent from the repo.
Claude will not invent brand imagery. Supply the files or name a substitute.

## 4. Supabase — TH MVP (blocks the entire product)
Live bundle points at `placeholder.supabase.co`. Nobody can get past sign-in.
Need: Project URL, anon key, project ref, access token.
Unblocks 11 migrations + 3 edge functions that are written but never deployed.

## 5. Accounts requiring payment
Apple Developer ($99/yr) — longest lead time, start first.
Google Play Console ($25 one-time).
Claude cannot create accounts or make payments.
