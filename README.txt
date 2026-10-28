Healthcare & Engineering Japanese Flashcards — V14

Files: index.html, app.js, learning.js, manifest.json.

V14 review update
- Retains the 2,264 Japanese headwords and the V13 vocabulary merge from 専門用語.xlsx Sheet1 and 国際分類.
- Performs full-dataset automated checks for duplicate Japanese headwords and missing Japanese, kana, English, or Vietnamese fields.
- Expands the character-level Hán-Việt mapping so all Kanji characters present in Japanese headwords are covered by the mapping; avoids question-mark placeholders for unmapped characters.
- Reviews key medical-device classification terms against PMDA guidance, corrects クラスⅢ reading to くらすさん, and refines translations for 鋼製小物 and 体外診断用機器.
- Excludes code-only/numeric identifiers such as 510(k), as requested.
- Preserves V13/V12 email templates and application features.

Existing features retained
- Vocabulary quiz, dictionary, custom vocabulary, telephone/dialogue tab and email templates.
- English/Japanese dialogue content and copy buttons remain available.

Deployment: replace index.html, app.js, learning.js and manifest.json in your GitHub Pages repository.

Quality note
- Automated completeness and duplicate checks cover the full 2,264-entry dataset.
- The medical-device classification subset received focused terminology review. Not every translation in the entire dataset has been independently certified or externally verified one by one; see IMPORT_AUDIT.txt for the exact scope and reference links.
