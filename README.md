# Mahr.io - Learning Management System

## Install

Clone/fork this repo and:

```
npm install
```

## Start Server

Start express server:

```
npm start
```

## Webpack

### Build once:

```
npm run build
```

### Watch files and rebuild:

```
npm run watch
```

## Tests

### Unit Test & Code Coverage:

```
npm run coverage
```

### E2E Tests:

Step 1 - [Prerequisite:] Protractor

```
npm install -g protractor
```

Step 2 - Selenium

```
./node_modules/protractor/bin/webdriver-manager update
```

Step 3 - Install latest Java SE Development Kit

[Java](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

Step 4 - Run E2E Tests:

```
protractor
```

## License

[ISC](https://opensource.org/licenses/ISC)
