# Decision memo · SH✡MER go-to-market · 2 Nov 2026
Board: CEO-office, CFO, CRO, CMO, CTO, CLO. For Dave (CEO). Staging only, nothing sent.

**Dave's question (verbatim):** "Is it a good time to start approaching potential paid users for the SH✡MER dashboard, like השומר החדש, Chabad, TJE, family and friends and social media outreach?"

## Answer in one line
**Yes for warm, no-price conversations now. Paid asks wait 2–3 days (payment links + dashboard plan lock). Social media waits until Play production + one real community story (~2–3 weeks).** Councils already have 7 send-ready, no-price emails in your to-do; those stay first.

---

## 1. Calculate ($ at ₪3.7/$, the rate the revenue desk uses)
Price facts from the staged Command page (internal, never in a first contact): 90-day pilot ₪2,500 (credited to the licence) · community licence up to 1,000 residents ₪890/mo or ₪9,900/yr · council licence ₪2/resident/yr, min ₪40,000.

| Channel | What it can bring | Days to first cash | Low / base / high by 21 Dec |
|---|---|---|---|
| Councils (7 emails ready) | ₪2,500 pilot → ₪40k+/yr licence | 30–60 (reply → call → purchase order → invoice) | $0 / $676 / $11.5k |
| Chabad house / community (paid pilot, donor can fund) | ₪2,500 pilot → ₪9,900/yr | 14–30 | $0 / $340 / $1.35k |
| Founding communities (2 warm contacts, free 90 days) | $0 now; case study; ₪9,900/yr from ~Feb 2027 | ~95 | $0 / $0 / $0 |
| השומר החדש (partner, not buyer) | Distribution to yishuvim + credibility | 60–120 | $0 / $0 / $0 |
| Family & friends (as Android testers) | $0; unlocks Google Play production (12 testers opted in for 14 days) | n/a | $0 / $0 / $0 |
| Social media | $0 until there is a real story | 45+ | $0 / $0 / $0 |

- **By M1 (21 Nov):** low $0 · base ≈ $135 (20% × one ₪2,500 pilot, same as the 2 Nov revenue desk) · high ≈ $2k (3 pilots agreed, M1's own SH✡MER target). Probabilities are board estimates, not data.
- **Meaning:** SH✡MER will not carry M1; services must. SH✡MER outreach is worth it only if it costs you ≤20 min a day, and because one council licence (min ₪40k ≈ $10.8k/yr, recurring) is worth more than any single services sprint after M2.

## 2. Kill-test (3 ways this fails, cheapest disproof)
1. **Empty map.** A dashboard with 15 users in a yishuv looks dead; a buyer sees no value. → *Disproof:* one founding community gets ≥30 residents installed in 14 days from one WhatsApp group message.
2. **Install friction.** Google Play is still closed testing (3 of 14 opted in at last check, 28 Oct); there is no iPhone app (web app only, limits on shake/background). Half a community may not get in. → *Disproof:* in the first community, ≥60% of residents who say yes are on the map within 48 h (Android via Play tester link or APK, iPhone via the web app).
3. **No budget owner.** Communities have no budget line; councils buy by procurement and are overloaded. → *Disproof:* ≥1 reply from the 7 council emails by 11 Nov, and every founding call answers "who pays after day 90?" (named person + budget line).

If 1 and 2 fail in the first community, stop all SH✡MER outreach and fix install + density before any paid ask.

## 3. Readiness check (facts as of tonight)
| Item | State | Blocks what |
|---|---|---|
| Firebase privacy rules | Deployed by you today | Nothing. Real data can be shown. |
| Command demo | Reworked to your 4 points + short tour (staging) | Your GO is still open (to-do). Fine to show live on a call. |
| Pricing | Monthly-first on staging (internal) | Nothing; never in a first contact. |
| Payments | Grow/Morning card clearing done (welcome email today); **payment links not created yet** | Self-serve checkout. A pilot can still be invoiced by Morning + bank transfer today. |
| Dashboard access | Sign-up is open on the live dashboard; plan lock not built (waits on your OK) | Handing paid access. CTO builds the lock in 1 run after your OK. |
| Google Play | Closed testing; production needs 12 testers opted in for 14 days | Easy installs for a whole community. F&F fixes this. |
| iPhone | No native app; web app works | iPhone users get fewer features. Say so honestly. |
| Licence terms | Draft on staging | OK for a pilot; a lawyer read before the first council licence. |
| "TJE" | **Not found anywhere** (repos, to-do, brain, past chats) | See section 5. |

**Verdict: ready for conversations and free founding pilots. Not yet ready to take money self-serve.** Two unblocks, both small: (a) CFO creates the 4 Morning payment links (Claude, next run, with your Morning login already connected), (b) your OK to lock the live dashboard to paying plans.

## 4. Decision
**FIRE** warm outreach now, in this order. **PARK** social media. **HOLD** TJE until you say what it is. Check date 16 Nov: prediction "≥1 founding community live with ≥30 residents, ≥1 council reply, Play clock started".

## 5. What "TJE" is
Searched: all repos in the container, the to-do page + database, BRAIN.md, brain.json, 3s-status, past chats. **No mention.** Best guesses, most likely first:
1. **The Jewish Entrepreneur (TJE)**, a US non-profit mentoring network for Jewish business owners (NY/NJ; source: jewishlink.news, July 2026). That would be a connector channel to US communities, not a buyer.
2. A US Jewish community body you know through the Miami family (federation, JCC or a school). The board's US ladder already says federations later, after iPhone.
**Question for you (one line):** what is TJE, and who is your contact there?

## 6. Sequenced plan per channel
Sender rule (BRAIN.md §2.9 + §7): first contacts go from **dave@3shamrocks.com**, signed "דייב מרקוביץ', מייסד SH✡MER · 3Shamrocks Studio". support@shomer-app.co.il is for user support only. WhatsApp from your own phone for people you know. No price in any first message.

### Day 0–1 · Councils (already written, in to-do "This week's moves")
Who: 7 named security heads (Upper Galilee, Kedumim, Lachish, Ramat HaNegev, Gilboa, Har Hevron, Golan). Offer: a short call + demo, then a paid pilot. Nothing new to write. Gap found tonight: brain.json says 11 more council heads (15:13 + 15:55 shifts) are "in the to-do", but the live to-do does not hold them; next run restores them with sources.

### Day 0–1 · Family & friends: become Android testers (unlocks Play)
Who: 15–20 people with an **Android** phone (only Android counts toward Google's 12). What: install from the Play tester link, open it once, keep it 14 days. Offer: none, a favour. Follow-up: Claude checks the opt-in count in Play Console daily.
Draft (WhatsApp):
> היי [שם], בקשה קטנה ממני 🙏
> אני בונה את SH✡MER, אפליקציית חירום קהילתית: מי שבסכנה לוחץ SOS או מנער את הטלפון, והשומרים שבחר מקבלים מיד התראה עם המיקום שלו.
> כדי לעלות לחנות של גוגל אני צריך עוד כמה אנשים עם אנדרואיד שיתקינו את גרסת הבדיקה ויחזיקו אותה 14 יום. זה לוקח 2 דקות ולא עולה כלום.
> אם זה בסדר מבחינתך, שלח/י לי את כתובת הג'ימייל שמחוברת לטלפון ואשלח לך קישור.
> תודה ענקית!
> דייב

### Day 1–3 · Founding communities (free 90 days, max 2)
Who: the 2 warm community contacts named in the private to-do (the founding-communities WhatsApp item; message already there). Offer: 90 days free, Dave sets it up, in return honest feedback + permission to tell the story. Only these 2 get "free"; everyone after pays the pilot.

### Day 2–4 · Chabad (paid pilot, donor can fund it)
Who: the Chabad contact the 25 Oct brain called "already in discussion". **Question for you:** which Chabad house / shaliach, and his phone? Offer: 90-day pilot; if both founding slots are taken, the pilot is paid, and a donor or the community's own fund can cover it (stated on the call, not in the message).
Draft (WhatsApp, warm contact):
> שלום הרב [שם], מה שלומך?
> אני רוצה לשתף אותך במשהו שאני בונה: SH✡MER, רשת חברתית של אזרחים למען אזרחים. מי שבסכנה לוחץ SOS או מנער את הטלפון, ומיד מקבלים התראה עם המיקום שלו גם משתמשי SH✡MER שבקרבתו וגם האנשים שבחר מראש. האפליקציה חינמית לכל אחד.
> לצד האפליקציה יש לוח בקרה לקהילה, שבו האחראי רואה על מפה אירועי חירום בזמן אמת, בלי שמות.
> חשבתי על בית חב"ד כי הקהילה שלכם מגיעה מכל מקום ונמצאת בקשר יומיומי, בדיוק המקום שבו רשת כזו עוזרת.
> אשמח להראות לך את זה ב-15 דקות, בטלפון או אצלך. מתי נוח לך?
> דייב

### Day 3–5 · השומר החדש (partnership, not a sale)
Who: the partnerships desk (address found 27 Oct; kept in the private to-do, not in this public repo). **Before it reaches your list:** CRO re-checks the name and role (the 7-day role-check rule); not re-verified tonight. Do not route this through the southern-region advisor (advisor, not an intro; reason in the private to-do). Offer: a joint pilot with one region's volunteers; SH✡MER free for the volunteers; no price.
Draft (email from dave@3shamrocks.com, subject: SH✡MER: היכרות והצעה לשיתוף פעולה):
> שלום [שם],
>
> שמי דייב מרקוביץ', ואני מפתח את SH✡MER, רשת חברתית של אזרחים למען אזרחים. מי שבסכנה לוחץ SOS או מנער את הטלפון, ומיד מקבלים התראה עם המיקום שלו גם משתמשי SH✡MER שנמצאים בקרבתו וגם האנשים שבחר מראש. האפליקציה חינמית לכל אחד, ומשלימה את 100 ו־101, לא מחליפה אותם.
>
> את השם לקחנו מארגון השומר של 1909, והרעיון קרוב מאוד לרוח שלכם: אזרחים שדואגים זה לזה בשטח. לצד האפליקציה בנינו את SH✡MER Command, לוח בקרה שבו הרכז רואה על מפה, בזמן אמת ובלי שמות, אירועי SOS באזור.
>
> אשמח לבדוק אם יש מקום לפיילוט משותף עם המתנדבים באחד המרחבים שלכם, בלי עלות למתנדבים. אם זה רלוונטי, אשמח לשיחה קצרה ולהדגמה, מתי שנוח לך.
>
> בתודה ובהערכה,
> דייב מרקוביץ'
> מייסד SH✡MER · 3Shamrocks Studio
> dave@3shamrocks.com · www.shomer-app.co.il

(The 1909 HaShomer link is from Dave's own brand story in memory/the master spec; keep it only if you are happy to say it.)

### Hold · TJE
Draft after you tell us what it is. If it is The Jewish Entrepreneur: an English intro asking for one introduction to a Jewish community security lead in the US, after the iPhone build exists.

### Park until ~16–20 Nov · Social media
Why: no public announcement of staged products (hard rule), Instagram/LinkedIn posting needs your GO on a batch (scope D not granted), and the first honest post needs a real story ("community X is live"). What is allowed now: the F&F tester ask in your own WhatsApp status, because it is a favour, not a launch. Unpark trigger: Play production approved **and** one founding community live.

## 7. What Dave does (in this order, ~20 min total)
1. Send the council emails already in the to-do (biggest money).
2. Send the F&F tester WhatsApp to 15–20 Android friends (unlocks Play).
3. Send the 2 founding-community WhatsApps (already in to-do).
4. Answer 2 questions: who is the Chabad contact (name + phone)? What is TJE?
5. Reply "OK lock dashboard" so paid plans can be enforced.

## 8. What Claude does next (no Dave needed)
- CFO: create the 4 Morning payment links (Morning is connected) and test each in Morning's test flow. Due 4 Nov.
- CTO: plan lock for the live dashboard, staged behind a flag, switched on only after Dave's OK. Due 5 Nov.
- CRO: role-check the השומר החדש partnerships contact; find the named head of the relevant region. Due 4 Nov.
- CMO: one-page Hebrew pilot sheet in the SH✡MER brand (transparent logo, no frame) to send after a first call, with exact deliverables per price. Due 5 Nov.
- Check 16 Nov: predictions above vs result → learnings.
