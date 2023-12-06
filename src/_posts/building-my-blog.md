---
title: "NextJS를 이용한 기술블로그 제작 후기"
excerpt: "이 블로그를 만드는 과정에서 경험한 것과 느낀 점을 기록하고자 포스트를 작성한다. velog, medium, 네이버, 티스토리 등등 편리한 플랫폼들을 뒤로하고 블로그를 직접 개발한 이유는 무엇일까?"
coverImage: "/images/post/building-my-blog/cover.jpg"
date: "2023-12-06 11:00:23"
author: "Minseok Seo"
ogImage: "/images/post/building-my-blog/cover.jpg"
tags: ["NextJS", "Review"]
---

이 블로그를 만드는 과정에서 경험한 것과 느낀 점을 기록하고자 포스트를 작성한다.

## 블로그를 직접 만든 이유

velog, medium, 네이버, 티스토리 등등 편리한 플랫폼들을 뒤로하고 블로그를 직접 개발한 이유는 무엇일까?

### 내가 원하는 UI

내가 원하는 기능만 남겨놓고 싶었고, 내가 원하는 기능을 제약없이 추가하고 싶었다.

쓰지 않는 기능들이 오밀조밀 모여있는 UI보다 필요한 부분만 정리된 깔끔한 노트같은 UI를 사용하고 싶었다.

### 개발적 성장

직접 모든 기능을 구현하고 운영하며 이슈들을 맞닥뜨리고 해결하는 과정에서 개발적 성장을 이루고 싶었다.

개발하고 싶은 서비스에 대한 아이디어는 가지고 있지만, 많은 비용을 투자해야 하기에 가장 접근하기 쉬운 주제부터 도전해보고 싶었다.

그렇게 선정하게 된 것이 블로그이다.

## Gatsby 대신 NextJS를 선정한 이유

과거에 Gatsby를 경험해보았는데, 이번에는 NextJS로 진행하게 되었다. Gatsby는 프로젝트에 asset(마크다운, 이미지 등등)을 추가하면 Gatsby가 graphql로 asset들을 정리해주고, 개발시 쿼리를 통해 편리하게 꺼내쓸 수 있는 SSG 프레임워크이다.

개발에 도움을 주는 수많은 플러그인을 가지고 있고, SEO도 높은 수준으로 제공해준다. 그럼에도 불구하고 Gatsby를 뒤로하고 NextJS로 새로 개발하게 된 이유는 아래와 같다.

**공식문서의 부실함**

빌드단의 커스터마이징이 필요할 경우 공식문서를 찾아보면 설명이 모호하거나 아예 존재하지 않는 경우가 있었다. 따라서, 수없이 검색하고 다른 프로젝트를 참고하여 해결해야 했고, 꽤 큰 스트레스 요소로 작용했으며, Gatsby를 사용하는 것 자체가 기술부채라고 생각했다.

**낮은 자유도**

이미 세팅되어 있는 기능들이 많기 때문에 사소한 기능을 하나 변경하려면 검색, 공부 등 수고를 꽤 들여야 했다. 그렇게 커스터마이징을 하더라도, 기본 작동방식을 우회하는 것이기에 stable하지 않은 느낌이 들어 마음이 편치 않았다.

**적은 시장수요**

다소 현실적인 이야기인데, 시장수요가 높은 프레임워크를 공부하고 사용해보고 싶었다.

**NextJS의 앱라우터를 경험해보고 싶었음**

NextJS의 앱라우터에 대한 공부를 차일피일 미루고 있었는데, 이번 프로젝트가 좋은 기회라고 생각했다.

## 개발 과정

### 1. 기획/디자인

![디자인](/images/post/building-my-blog/design.png)

프로젝트를 진행할 때, 피그마를 통해 어느정도 기획과 디자인을 완성하고 시작하는 것이 좋다. 내가 머릿속에 그린 그림이 있어도 막상 코드로 구현하여 확인해보면 마음에 들지 않는 경우가 많다. 그럴 경우 코드를 조금씩 바꿔가며 수정하게 되는데, 원하는 수준에 도달하기까지 시간이 꽤 소요된다.

또한 위 사진과 같이 컴포넌트로 요소들을 나누고 디자인을 진행하면, 개발시 컴포넌트 분리에 대한 고민을 확연히 줄일 수 있다.

### 2. 스택선정/개발

**선정 스택: NextJS, tailwindCSS, Vercel**

필자는 스택을 선정할 때 두가지 기준을 둔다.

1. 기획이 요구하는 스펙을 모두 구현할 수 있는가?
2. 내가 경험해보고 싶은 스택인가?

- **NextJS**

**Gatsby 대신 NextJS를 선정한 이유**에서 설명하였듯이, NextJS는 이 두가지를 충족하였기에 선정하였다.

- **tailwindCSS**

```typescript
<div className="max-w-[50rem] mx-auto px-4 pb-12 sm:pb-36">
  <div className="mt-4 sm:mt-12 flex justify-center sm:justify-start">
    <Profile />
  </div>
  <div className="relative">
    <div className="absolute -left-[12.25rem] top-12 hidden xl:block">
      <TagList tags={tags} />
    </div>
    <div className="mt-[2.5rem] sm:mt-[3rem]">
      <PostList posts={posts} />
    </div>
  </div>
</div>
```

디자인 시스템의 경우 tailwindCSS를 선정하였는데, 이는 필자가 사랑하는 프레임워크이다. bootstrap과 같은 기성 라이브러리와 다르게, tailwindCSS는 빌드시 내가 실제 사용한 utility class만 css 번들에 포함된다.

또한 필요한 css를 class로 나열하는 방식이기 때문에, styled-components와 같은 CSS-in-JS 라이브러리의 고질적인 문제인 Naming 부분에 대한 고민이 필요없다.

tailwindCSS의 경우 가독성을 저하시킨다는 의견이 많은데, 이 부분은 개인적인 선호의 영역이다. 개인적인 의견으로는, 설령 가독성이 떨어진다고 하더라도 tailwindCSS의 압도적인 생산성은 이를 충분히 상쇄시키고도 남는다.

- **Vercel**

무료 플랜에서 꽤 괜찮은 옵션을 제공해주고, NextJS와의 연동성이 좋기 때문에 선정하였다.

### 3. SEO(Search Engine Optimization)

SEO의 경우 아직 많은 공을 들이진 않았다. SEO 관련하여 진행한 작업은 아래와 같다.

- **sitemap.xml 생성**

```typescript
/* src/app/sitemap.ts */

import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(["slug"]);

  return [
    {
      url: "https://www.minseok.life",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // ...생략...
    ...posts.map(
      (
        post
      ): {
        url: string;
        lastModified: Date;
        changeFrequency: "daily";
        priority: number;
      } => ({
        url: `https://www.minseok.life/posts/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      })
    ),
  ];
}
```

위와 같이 파일을 생성하여 sitemap 함수를 export 하면 sitemap.xml을 동적으로 생성할 수 있다.

결과물은 아래와 같다.

```xml
This XML file does not appear to have any style information associated with it. The document tree is shown below.
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://www.minseok.life</loc>
<lastmod>2023-12-06T04:00:59.224Z</lastmod>
<changefreq>daily</changefreq>
<priority>1</priority>
</url>
<url>
<loc>https://www.minseok.life/search</loc>
<lastmod>2023-12-06T04:00:59.224Z</lastmod>
<changefreq>daily</changefreq>
<priority>0.5</priority>
</url>
<url>
<loc>https://www.minseok.life/tags</loc>
<lastmod>2023-12-06T04:00:59.224Z</lastmod>
<changefreq>daily</changefreq>
<priority>0.5</priority>
</url>
<url>
<loc>https://www.minseok.life/posts/blog-opened</loc>
<lastmod>2023-12-06T04:00:59.224Z</lastmod>
<changefreq>daily</changefreq>
<priority>1</priority>
</url>
<url>
<loc>https://www.minseok.life/posts/building-my-blog</loc>
<lastmod>2023-12-06T04:00:59.224Z</lastmod>
<changefreq>daily</changefreq>
<priority>1</priority>
</url>
</urlset>
```

- **robots.txt 생성**

```txt
User-agent: *
Allow: /
```

public 폴더에 위와 같이 robots.txt 파일을 추가해주었다. 별다른 옵션은 추가하지 않았다.

- **검색엔진 등록**

**구글 서치 콘솔**와 **네이버 서치 어드바이저**에 사이트를 등록하고 소유권 확인 절차를 거친 후 생성한 sitemap.xml과 robots.txt파일을 등록하였다.

위와 같이, SEO의 경우 기본적인 세팅만 하고 실험하며 개선해나갈 예정이다.

### 4. 기술부채

사실 아직 너무나도 작고 간단한 서비스이기에 기술부채라고 할 때 생각나는 것이 별로 없다.

한 가지 꼽자면 tailwind의 커스텀이 필요할 것 같다.

빠르게 개발에 착수했다 보니 디자인 시스템에 대한 견고한 설정을 건너뛴 감이 있다.

- Custom 단위 정의를 통한 arbitrary value 줄이기
- 자주 사용하는 색상에 대한 Custom utility class 정의
- 반응형 break-point 재정립

## 마치며

이렇게 블로그 제작기를 간단하게 작성해보았다.

- [ ] Analytics 적용
- [ ] 연관 포스트
- [ ] 다음/이전 포스트
- [ ] 시리즈 기능

위는 다음 Todo이다.

열심히 개선해서 플랫폼이 부럽지 않은 개인 블로그를 만들어 볼 생각이다.
