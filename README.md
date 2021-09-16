# FullStory PoC

## Steps to startup

$ node -v
v15.12.0

$ yarn -v
1.22.10

$ yarn install

$ edit `src/index.js` and provide an `orgId` to enable recording

$ yarn start

open http://localhost:3000/

## Steps to reproduce

### Scenario 1

#### Expected

1. Go to / (not recorded)
2. Go to /A clicking "Go A" (masked)
3. Go to /B clicking "Go B" (unmasked)
4. Go to /A clicking "Go A" (masked)

#### Current

1. Go to / (not recorded)
2. Go to /A clicking "Go A" (masked)
3. Go to /B clicking "Go B" (masked)
4. Go to /A clicking "Go A" (masked)

### Scenario 2

#### Expected

1. Go to /. (not recorded)
2. Go to /B clicking "Go B". (unmasked)
3. Go to /A clicking "Go A". (masked)
4. Go to /B clicking "Go A". (unmasked)

#### Current

1. Go to /. (not recorded)
2. Go to /B clicking "Go B". (unmasked)
3. Go to /A clicking "Go A". (unmasked)
4. Go to /B clicking "Go A". (unmasked)
