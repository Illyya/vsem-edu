<template>
  <div class="wrapper">
    <Nuxt />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

$color-1: #94d163;

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #4a545a;
}

.wrapper {
  padding: 36px 70px 70px;
  display: flex;
  justify-content: center;
}

.title-3 {
  font-weight: 700;
  font-size: 1.5rem;
}

.border-gray-with-radius {
  padding: 20px;
  border: 2px solid #b6c0c6;
  border-radius: 8px;
}
</style>
