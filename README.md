# 프로젝트 개요

- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅

### Terminal:

```sh
- yarn install

- yarn start
```

## Favicon 세팅

### 각 파일의 역할

- favicon.ico
  - 주소 창에 표시되는 대표 아이콘을 뜻하며, 웹사이트의 식별성과 브랜드 인식을 높이는 중요한 요소로 쓰이고 있다.
  - SEO 관점 : 검색 엔진은 파비콘을 인덱싱 -> 웹사이트의 신뢰성과 전문성을 평가하는 요소로 활용 -> 검색 엔진 결과 페이지의 클릭률을 높이는 데에 기여
- site.webmanifest

  - 브라우저에 웹 앱이 무엇을 하는지, 어떤 아이콘을 사용해야 하는지, 어떤 시작 URL을 가져야 하는지 등을 알려준다.
  - 정보 : 웹 앱의 이름 / 아이콘의 경로 및 크기 / 테마 색상 / standalone 모드, fullscreen 모드 등의 어떤 방식으로 동작하는지에 관한 지시사항

- android-icon
  - 안드로이드 앱에서 사용되는 아이콘 리소스
  - 일반적으로 'drawable' 폴더 내에서 관리
- apple-icon
  - iOS 기기 및 Safari 웹 브라우저에서 사용되는 아이콘
  - Apple 디바이스 및 브라우저에 맞는 아이콘 이미지를 제공해야 한다

## SEO 스코어 분석

- 스코어 분석에 사용한 서비스: https://www.seoreviewtools.com/google-seo-checker/

![캡처](https://github.com/cks612/hanghae-plus-2024-ssr-practice/assets/66737450/8a23cd97-8457-47cd-80bc-589e4d54f59b)

### 리액트 프로젝트에서 SEO를 개선하기 위한 방법

- SSR (서버 사이드 렌더링): 리액트 앱을 서버에서 렌더링하여 초기 페이지 로드 시에 검색 엔진이 콘텐츠를 색인할 수 있도록 한다.
- Lazy Loading 및 코드 스플리팅: 필요한 경우 리액트 앱에서 이미지 및 스크립트를 지연로드하고, 코드 스플리팅을 통해 초기 로드 속도를 향상시킨다.
- 이미지 최적화: 이미지를 최적화하여 파일 크기를 줄이고 alt 속성을 추가하여 검색 엔진이 이미지를 이해하고 인덱싱할 수 있도록 한다.
- 사이트맵 제출: 검색 엔진에 사이트맵을 제출하여 사이트의 모든 페이지를 색인하고 검색 결과에 노출할 수 있도록 한다.
