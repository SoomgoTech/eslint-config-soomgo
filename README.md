# eslint-config-soomgo [![npm][npm-image]][npm-url]

# eslint-config-standard 

[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-soomgo

## Install

숨고에서 사용하는 JavaScript 코딩 컨벤션 가이드라인 eslint 설정파일입니다.
[eslint-config-standard](https://github.com/standard/eslint-config-standard)를 기반으로 작성되었습니다.

1. npm에서 필요한 패키지들을 다운로드 받습니다.
```bash
npm install eslint-config-soomgo eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node --save-dev
```

2. 프로젝트의 `.eslintrc` 파일에 다음과 같이 추가합니다.
```json
{
  "extends": ["standard", "soomgo"]
}
```

## License
MIT. Copyright (c) Evan Moon.

