# A guide to managing state in Next.js with Zustand

https://articles.wesionary.team/a-guide-to-managing-state-in-next-js-with-zustand-22a2899e5d0f

# Swagger UI - Platzi Fake Store API 1.0 OAS3

https://api.escuelajs.co/docs/

# multi slices 와 middleware/devtools 사용시에 발생하는 typescript error를 수정하였다.

https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern

# nextjs에서 <Image\>의 사용법

https://www.nokiahub.site/dev/next-image/

## Use layout=‘fill’

layout=‘fill’을 사용하여 이미지의 사이즈를 부모 엘리먼트의 사이즈에 따라서 조절할 수 있습니다.
그리고 Image의 props인 objectFit과 objectPosition을 지정하여 이미지의 비율을 유지하면서 이미지를 포함하는 컨테이너 내부에서 컨테이너를 기준으로 이미지의 사이즈와 위치를 설정할 수 있습니다.

## object-fit

object-fit은 <img\>, <video\> 의 사이즈가 컨테이너 내부에서 어떻게 조절되는지를 나타냅니다.object-fit이 ‘contain’이면 내부 콘텐츠의 비율을 유지하면서 컨테이너에 fit 되도록 내부 콘텐츠의 사이즈가 조정됩니다. 컨테이너 배율과 콘텐츠 비율이 서로 다를 경우 letterbox 처리가 됩니다.

## object-position

object-position은 컨테이너 내부에서 <img\>, <video\> 의 위치를 나타냅니다.
object-position이 ‘center’면 내부 컨텐츠가 컨테이너를 기준으로 중심에 위치하게 됩니다.

# State Optimization

https://javascript.plainenglish.io/building-a-shopping-cart-with-zustand-a-practical-guide-to-react-state-management-with-typescript-73ec10c66fb7

Building a Shopping Cart with Next.js and Zustand: State Management with TypeScript
을 참조하여 state selector를 구현하였다. state minimization을 react dev tool 로 확인하였다.
