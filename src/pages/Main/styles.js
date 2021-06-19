import styled from 'styled-components';

export const Container = styled.body`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap');
  }

  margin: 0;
  font-family: 'Mulish', -apple-system, Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  body {
    margin: 0;
    font-family: 'Mulish', -apple-system, Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h6,
  .h6,
  h5,
  .h5,
  h4,
  .h4,
  h3,
  .h3,
  h2,
  .h2,
  h1,
  .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: 'Newsreader', -apple-system, BlinkMacSystemFont;
    font-weight: 600;
    line-height: 1.2;
  }

  h1,
  .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1,
    .h1 {
      font-size: 2.5rem;
    }
  }

  h2,
  .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2,
    .h2 {
      font-size: 2rem;
    }
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #d40054;
    text-decoration: underline;
  }
  a:hover {
    color: #d40054;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }
  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }
  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-1 {
      font-size: 5rem;
    }
  }

  .display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-2 {
      font-size: 4.5rem;
    }
  }

  .display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-3 {
      font-size: 4rem;
    }
  }

  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-4 {
      font-size: 3.5rem;
    }
  }

  .display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-5 {
      font-size: 3rem;
    }
  }

  .display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-6 {
      font-size: 2.5rem;
    }
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }

  .list-inline-item {
    display: inline-block;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }

  .initialism {
    font-size: 0.875em;
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  .blockquote > :last-child {
    margin-bottom: 0;
  }

  .blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 0.875em;
    color: #6c757d;
  }
  .blockquote-footer::before {
    content: '—';
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }

  .figure {
    display: inline-block;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .figure-caption {
    font-size: 0.875em;
    color: #6c757d;
  }

  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container-sm,
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container-md,
    .container-sm,
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1320px;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) / -2);
    margin-left: calc(var(--bs-gutter-x) / -2);
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }

  .col {
    flex: 1 0 0%;
  }

  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-1 {
    margin-left: 8.3333333333%;
  }

  .offset-2 {
    margin-left: 16.6666666667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.3333333333%;
  }

  .offset-5 {
    margin-left: 41.6666666667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.3333333333%;
  }

  .offset-8 {
    margin-left: 66.6666666667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.3333333333%;
  }

  .offset-11 {
    margin-left: 91.6666666667%;
  }

  .g-0,
  .gx-0 {
    --bs-gutter-x: 0;
  }

  .g-0,
  .gy-0 {
    --bs-gutter-y: 0;
  }

  .g-1,
  .gx-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-1,
  .gy-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-2,
  .gx-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-2,
  .gy-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-3,
  .gx-3 {
    --bs-gutter-x: 1rem;
  }

  .g-3,
  .gy-3 {
    --bs-gutter-y: 1rem;
  }

  .g-4,
  .gx-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-4,
  .gy-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-5,
  .gx-5 {
    --bs-gutter-x: 3rem;
  }

  .g-5,
  .gy-5 {
    --bs-gutter-y: 3rem;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%;
    }

    .row-cols-sm-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-sm-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-sm-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-sm-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-sm-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-sm-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-sm-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-sm-0 {
      margin-left: 0;
    }

    .offset-sm-1 {
      margin-left: 8.3333333333%;
    }

    .offset-sm-2 {
      margin-left: 16.6666666667%;
    }

    .offset-sm-3 {
      margin-left: 25%;
    }

    .offset-sm-4 {
      margin-left: 33.3333333333%;
    }

    .offset-sm-5 {
      margin-left: 41.6666666667%;
    }

    .offset-sm-6 {
      margin-left: 50%;
    }

    .offset-sm-7 {
      margin-left: 58.3333333333%;
    }

    .offset-sm-8 {
      margin-left: 66.6666666667%;
    }

    .offset-sm-9 {
      margin-left: 75%;
    }

    .offset-sm-10 {
      margin-left: 83.3333333333%;
    }

    .offset-sm-11 {
      margin-left: 91.6666666667%;
    }

    .g-sm-0,
    .gx-sm-0 {
      --bs-gutter-x: 0;
    }

    .g-sm-0,
    .gy-sm-0 {
      --bs-gutter-y: 0;
    }

    .g-sm-1,
    .gx-sm-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-sm-1,
    .gy-sm-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-sm-2,
    .gx-sm-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-sm-2,
    .gy-sm-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-sm-3,
    .gx-sm-3 {
      --bs-gutter-x: 1rem;
    }

    .g-sm-3,
    .gy-sm-3 {
      --bs-gutter-y: 1rem;
    }

    .g-sm-4,
    .gx-sm-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-sm-4,
    .gy-sm-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-sm-5,
    .gx-sm-5 {
      --bs-gutter-x: 3rem;
    }

    .g-sm-5,
    .gy-sm-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }

    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-md-0 {
      margin-left: 0;
    }

    .offset-md-1 {
      margin-left: 8.3333333333%;
    }

    .offset-md-2 {
      margin-left: 16.6666666667%;
    }

    .offset-md-3 {
      margin-left: 25%;
    }

    .offset-md-4 {
      margin-left: 33.3333333333%;
    }

    .offset-md-5 {
      margin-left: 41.6666666667%;
    }

    .offset-md-6 {
      margin-left: 50%;
    }

    .offset-md-7 {
      margin-left: 58.3333333333%;
    }

    .offset-md-8 {
      margin-left: 66.6666666667%;
    }

    .offset-md-9 {
      margin-left: 75%;
    }

    .offset-md-10 {
      margin-left: 83.3333333333%;
    }

    .offset-md-11 {
      margin-left: 91.6666666667%;
    }

    .g-md-0,
    .gx-md-0 {
      --bs-gutter-x: 0;
    }

    .g-md-0,
    .gy-md-0 {
      --bs-gutter-y: 0;
    }

    .g-md-1,
    .gx-md-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-md-1,
    .gy-md-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-md-2,
    .gx-md-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-md-2,
    .gy-md-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-md-3,
    .gx-md-3 {
      --bs-gutter-x: 1rem;
    }

    .g-md-3,
    .gy-md-3 {
      --bs-gutter-y: 1rem;
    }

    .g-md-4,
    .gx-md-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-md-4,
    .gy-md-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-md-5,
    .gx-md-5 {
      --bs-gutter-x: 3rem;
    }

    .g-md-5,
    .gy-md-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%;
    }

    .row-cols-lg-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-lg-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-lg-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-lg-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-lg-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-lg-0 {
      margin-left: 0;
    }

    .offset-lg-1 {
      margin-left: 8.3333333333%;
    }

    .offset-lg-2 {
      margin-left: 16.6666666667%;
    }

    .offset-lg-3 {
      margin-left: 25%;
    }

    .offset-lg-4 {
      margin-left: 33.3333333333%;
    }

    .offset-lg-5 {
      margin-left: 41.6666666667%;
    }

    .offset-lg-6 {
      margin-left: 50%;
    }

    .offset-lg-7 {
      margin-left: 58.3333333333%;
    }

    .offset-lg-8 {
      margin-left: 66.6666666667%;
    }

    .offset-lg-9 {
      margin-left: 75%;
    }

    .offset-lg-10 {
      margin-left: 83.3333333333%;
    }

    .offset-lg-11 {
      margin-left: 91.6666666667%;
    }

    .g-lg-0,
    .gx-lg-0 {
      --bs-gutter-x: 0;
    }

    .g-lg-0,
    .gy-lg-0 {
      --bs-gutter-y: 0;
    }

    .g-lg-1,
    .gx-lg-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-lg-1,
    .gy-lg-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-lg-2,
    .gx-lg-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-lg-2,
    .gy-lg-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-lg-3,
    .gx-lg-3 {
      --bs-gutter-x: 1rem;
    }

    .g-lg-3,
    .gy-lg-3 {
      --bs-gutter-y: 1rem;
    }

    .g-lg-4,
    .gx-lg-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-lg-4,
    .gy-lg-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-lg-5,
    .gx-lg-5 {
      --bs-gutter-x: 3rem;
    }

    .g-lg-5,
    .gy-lg-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%;
    }

    .row-cols-xl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-xl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xl-0 {
      margin-left: 0;
    }

    .offset-xl-1 {
      margin-left: 8.3333333333%;
    }

    .offset-xl-2 {
      margin-left: 16.6666666667%;
    }

    .offset-xl-3 {
      margin-left: 25%;
    }

    .offset-xl-4 {
      margin-left: 33.3333333333%;
    }

    .offset-xl-5 {
      margin-left: 41.6666666667%;
    }

    .offset-xl-6 {
      margin-left: 50%;
    }

    .offset-xl-7 {
      margin-left: 58.3333333333%;
    }

    .offset-xl-8 {
      margin-left: 66.6666666667%;
    }

    .offset-xl-9 {
      margin-left: 75%;
    }

    .offset-xl-10 {
      margin-left: 83.3333333333%;
    }

    .offset-xl-11 {
      margin-left: 91.6666666667%;
    }

    .g-xl-0,
    .gx-xl-0 {
      --bs-gutter-x: 0;
    }

    .g-xl-0,
    .gy-xl-0 {
      --bs-gutter-y: 0;
    }

    .g-xl-1,
    .gx-xl-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-xl-1,
    .gy-xl-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-xl-2,
    .gx-xl-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-xl-2,
    .gy-xl-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-xl-3,
    .gx-xl-3 {
      --bs-gutter-x: 1rem;
    }

    .g-xl-3,
    .gy-xl-3 {
      --bs-gutter-y: 1rem;
    }

    .g-xl-4,
    .gx-xl-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-xl-4,
    .gy-xl-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-xl-5,
    .gx-xl-5 {
      --bs-gutter-x: 3rem;
    }

    .g-xl-5,
    .gy-xl-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%;
    }

    .row-cols-xxl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xxl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xxl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xxl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-xxl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xxl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xxl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xxl-0 {
      margin-left: 0;
    }

    .offset-xxl-1 {
      margin-left: 8.3333333333%;
    }

    .offset-xxl-2 {
      margin-left: 16.6666666667%;
    }

    .offset-xxl-3 {
      margin-left: 25%;
    }

    .offset-xxl-4 {
      margin-left: 33.3333333333%;
    }

    .offset-xxl-5 {
      margin-left: 41.6666666667%;
    }

    .offset-xxl-6 {
      margin-left: 50%;
    }

    .offset-xxl-7 {
      margin-left: 58.3333333333%;
    }

    .offset-xxl-8 {
      margin-left: 66.6666666667%;
    }

    .offset-xxl-9 {
      margin-left: 75%;
    }

    .offset-xxl-10 {
      margin-left: 83.3333333333%;
    }

    .offset-xxl-11 {
      margin-left: 91.6666666667%;
    }

    .g-xxl-0,
    .gx-xxl-0 {
      --bs-gutter-x: 0;
    }

    .g-xxl-0,
    .gy-xxl-0 {
      --bs-gutter-y: 0;
    }

    .g-xxl-1,
    .gx-xxl-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-xxl-1,
    .gy-xxl-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-xxl-2,
    .gx-xxl-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-xxl-2,
    .gy-xxl-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-xxl-3,
    .gx-xxl-3 {
      --bs-gutter-x: 1rem;
    }

    .g-xxl-3,
    .gy-xxl-3 {
      --bs-gutter-y: 1rem;
    }

    .g-xxl-4,
    .gx-xxl-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-xxl-4,
    .gy-xxl-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-xxl-5,
    .gx-xxl-5 {
      --bs-gutter-x: 3rem;
    }

    .g-xxl-5,
    .gy-xxl-5 {
      --bs-gutter-y: 3rem;
    }
  }
  .table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #212529;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #212529;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #212529;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
  }
  .table > :not(caption) > * > * {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  .table > tbody {
    vertical-align: inherit;
  }
  .table > thead {
    vertical-align: bottom;
  }
  .table > :not(:last-child) > :last-child > * {
    border-bottom-color: currentColor;
  }

  .caption-top {
    caption-side: top;
  }

  .table-sm > :not(caption) > * > * {
    padding: 0.25rem 0.25rem;
  }

  .table-bordered > :not(caption) > * {
    border-width: 1px 0;
  }
  .table-bordered > :not(caption) > * > * {
    border-width: 0 1px;
  }

  .table-borderless > :not(caption) > * > * {
    border-bottom-width: 0;
  }

  .table-striped > tbody > tr:nth-of-type(odd) {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color);
  }

  .table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color);
  }

  .table-hover > tbody > tr:hover {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color);
  }

  .table-primary {
    --bs-table-bg: #d4d7fc;
    --bs-table-striped-bg: #c9ccef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bfc2e3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c4c7e9;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bfc2e3;
  }

  .table-secondary {
    --bs-table-bg: #ecd1f9;
    --bs-table-striped-bg: #e0c7ed;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #d4bce0;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #dac1e6;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #d4bce0;
  }

  .table-success {
    --bs-table-bg: #d1e7dd;
    --bs-table-striped-bg: #c7dbd2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bcd0c7;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c1d6cc;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bcd0c7;
  }

  .table-info {
    --bs-table-bg: #cff4fc;
    --bs-table-striped-bg: #c5e8ef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #badce3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfe2e9;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #badce3;
  }

  .table-warning {
    --bs-table-bg: #fff3cd;
    --bs-table-striped-bg: #f2e7c3;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e6dbb9;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ece1be;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #e6dbb9;
  }

  .table-danger {
    --bs-table-bg: #f8d7da;
    --bs-table-striped-bg: #eccccf;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfc2c4;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5c7ca;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfc2c4;
  }

  .table-light {
    --bs-table-bg: #f8f9fa;
    --bs-table-striped-bg: #ecedee;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfe0e1;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e6e7;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfe0e1;
  }

  .table-dark {
    --bs-table-bg: #212529;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff;
    color: #fff;
    border-color: #373b3e;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 575.98px) {
    .table-responsive-sm {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 767.98px) {
    .table-responsive-md {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 991.98px) {
    .table-responsive-lg {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 1199.98px) {
    .table-responsive-xl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 1399.98px) {
    .table-responsive-xxl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  .form-label {
    margin-bottom: 0.5rem;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
  }

  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
  }

  .form-text {
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #6c757d;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control[type='file'] {
    overflow: hidden;
  }
  .form-control[type='file']:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #949bf8;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  }
  .form-control::-webkit-date-and-time-value {
    height: 1.5em;
  }
  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }
  .form-control::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control::file-selector-button {
      transition: none;
    }
  }
  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3;
  }
  .form-control::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }
  }
  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: 0.375rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: #212529;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }
  .form-control-plaintext.form-control-sm,
  .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }
  .form-control-sm::file-selector-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }
  .form-control-sm::-webkit-file-upload-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }

  .form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  .form-control-lg::file-selector-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }
  .form-control-lg::-webkit-file-upload-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }

  textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
  }
  textarea.form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
  }
  textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
  }

  .form-control-color {
    max-width: 3rem;
    height: auto;
    padding: 0.375rem;
  }
  .form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control-color::-moz-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }
  .form-control-color::-webkit-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }

  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .form-select:focus {
    border-color: #949bf8;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  }
  .form-select[multiple],
  .form-select[size]:not([size='1']) {
    padding-right: 0.75rem;
    background-image: none;
  }
  .form-select:disabled {
    background-color: #e9ecef;
  }
  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
  }

  .form-select-sm {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-size: 0.875rem;
  }

  .form-select-lg {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
  }

  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }

  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
  .form-check-input[type='checkbox'] {
    border-radius: 0.25em;
  }
  .form-check-input[type='radio'] {
    border-radius: 50%;
  }
  .form-check-input:active {
    filter: brightness(90%);
  }
  .form-check-input:focus {
    border-color: #949bf8;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  }
  .form-check-input:checked {
    background-color: #2937f0;
    border-color: #2937f0;
  }
  .form-check-input:checked[type='checkbox'] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
  .form-check-input:checked[type='radio'] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }
  .form-check-input[type='checkbox']:indeterminate {
    background-color: #2937f0;
    border-color: #2937f0;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }
  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }
  .form-check-input[disabled] ~ .form-check-label,
  .form-check-input:disabled ~ .form-check-label {
    opacity: 0.5;
  }

  .form-switch {
    padding-left: 2.5em;
  }
  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none;
    }
  }
  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23949bf8'/%3e%3c/svg%3e");
  }
  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  .form-check-inline {
    display: inline-block;
    margin-right: 1rem;
  }

  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }
  .btn-check[disabled] + .btn,
  .btn-check:disabled + .btn {
    pointer-events: none;
    filter: none;
    opacity: 0.65;
  }

  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .form-range:focus {
    outline: 0;
  }
  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  }
  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  }
  .form-range::-moz-focus-outer {
    border: 0;
  }
  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #2937f0;
    border: 0;
    border-radius: 1rem;
    -webkit-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-range::-webkit-slider-thumb {
      -webkit-transition: none;
      transition: none;
    }
  }
  .form-range::-webkit-slider-thumb:active {
    background-color: #bfc3fb;
  }
  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #2937f0;
    border: 0;
    border-radius: 1rem;
    -moz-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-range::-moz-range-thumb {
      -moz-transition: none;
      transition: none;
    }
  }
  .form-range::-moz-range-thumb:active {
    background-color: #bfc3fb;
  }
  .form-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .form-range:disabled {
    pointer-events: none;
  }
  .form-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd;
  }
  .form-range:disabled::-moz-range-thumb {
    background-color: #adb5bd;
  }

  .form-floating {
    position: relative;
  }
  .form-floating > .form-control,
  .form-floating > .form-select {
    height: calc(3.5rem + 2px);
    padding: 1rem 0.75rem;
  }
  .form-floating > label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-floating > label {
      transition: none;
    }
  }
  .form-floating > .form-control::-moz-placeholder {
    color: transparent;
  }
  .form-floating > .form-control:-ms-input-placeholder {
    color: transparent;
  }
  .form-floating > .form-control::placeholder {
    color: transparent;
  }
  .form-floating > .form-control:not(:-moz-placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:not(:-ms-input-placeholder) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:focus,
  .form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:-webkit-autofill {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-select {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:not(:-ms-input-placeholder) ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-select ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:-webkit-autofill ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control,
  .input-group > .form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
    z-index: 3;
  }
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  .input-group .btn:focus {
    z-index: 3;
  }

  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  .input-group-lg > .form-control,
  .input-group-lg > .form-select,
  .input-group-lg > .input-group-text,
  .input-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text,
  .input-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .input-group-lg > .form-select,
  .input-group-sm > .form-select {
    padding-right: 3rem;
  }

  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group.has-validation
    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #198754;
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(25, 135, 84, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated :valid ~ .valid-feedback,
  .was-validated :valid ~ .valid-tooltip,
  .is-valid ~ .valid-feedback,
  .is-valid ~ .valid-tooltip {
    display: block;
  }

  .btn {
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
  }
  .btn-check:focus + .btn,
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    pointer-events: none;
    opacity: 0.65;
  }

  .btn-primary {
    color: #fff;
    background-color: #d40054;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: black;
  }

  .btn-primary-login {
    color: black;
    background-color: #fff;
    border-color: black;
  }

  .btn-primary-login:hover {
    color: #fff;
    background-color: black;
    border-color: #fff;
  }

  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-light:hover {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-check:focus + .btn-outline-light,
  .btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-check:checked + .btn-outline-light,
  .btn-check:active + .btn-outline-light,
  .btn-outline-light:active,
  .btn-outline-light.active,
  .btn-outline-light.dropdown-toggle.show {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-check:checked + .btn-outline-light:focus,
  .btn-check:active + .btn-outline-light:focus,
  .btn-outline-light:active:focus,
  .btn-outline-light.active:focus,
  .btn-outline-light.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-light:disabled,
  .btn-outline-light.disabled {
    color: #f8f9fa;
    background-color: transparent;
  }

  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }

  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    flex: 1 1 auto;
  }

  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .btn-toolbar .input-group {
    width: auto;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-group > .btn:nth-child(n + 3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #2937f0;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .nav-link {
      transition: none;
    }
  }
  .nav-link:hover,
  .nav-link:focus {
    color: #212cc0;
  }
  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }

  .nav-tabs {
    border-bottom: 1px solid #dee2e6;
  }
  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: none;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
    isolation: isolate;
  }
  .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav-pills .nav-link {
    background: none;
    border: 0;
    border-radius: 0.25rem;
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #2937f0;
  }

  .nav-fill > .nav-link,
  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }

  .nav-fill .nav-item .nav-link,
  .nav-justified .nav-item .nav-link {
    width: 100%;
  }

  .tab-content > .tab-pane {
    display: none;
  }
  .tab-content > .active {
    display: block;
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-sm,
  .navbar > .container-md,
  .navbar > .container-lg,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-brand {
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
  }
  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-nav .dropdown-menu {
    position: static;
  }

  .navbar-text {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .navbar-toggler {
      transition: none;
    }
  }
  .navbar-toggler:hover {
    text-decoration: none;
  }
  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.25rem;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .navbar-nav-scroll {
    max-height: var(--bs-scroll-height, 75vh);
    overflow-y: auto;
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }
  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .offcanvas {
      transition: none;
    }
  }

  .offcanvas-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
  }
  .offcanvas-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
  }

  .offcanvas-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .offcanvas-body {
    flex-grow: 1;
    padding: 1rem 1rem;
    overflow-y: auto;
  }

  .offcanvas-start {
    top: 0;
    left: 0;
    width: 400px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
  }

  .offcanvas-end {
    top: 0;
    right: 0;
    width: 400px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
  }

  .offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateY(-100%);
  }

  .offcanvas-bottom {
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
  }

  .offcanvas.show {
    transform: none;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: '';
  }

  .link-primary {
    color: #2937f0;
  }
  .link-primary:hover,
  .link-primary:focus {
    color: #212cc0;
  }

  .link-secondary {
    color: #9f1ae2;
  }
  .link-secondary:hover,
  .link-secondary:focus {
    color: #7f15b5;
  }

  .link-success {
    color: #198754;
  }
  .link-success:hover,
  .link-success:focus {
    color: #146c43;
  }

  .link-info {
    color: #0dcaf0;
  }
  .link-info:hover,
  .link-info:focus {
    color: #3dd5f3;
  }

  .link-warning {
    color: #ffc107;
  }
  .link-warning:hover,
  .link-warning:focus {
    color: #ffcd39;
  }

  .link-danger {
    color: #dc3545;
  }
  .link-danger:hover,
  .link-danger:focus {
    color: #b02a37;
  }

  .link-light {
    color: #f8f9fa;
  }
  .link-light:hover,
  .link-light:focus {
    color: #f9fafb;
  }

  .link-dark {
    color: #212529;
  }
  .link-dark:hover,
  .link-dark:focus {
    color: #1a1e21;
  }

  .ratio {
    position: relative;
    width: 100%;
  }
  .ratio::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: '';
  }
  .ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ratio-1x1 {
    --bs-aspect-ratio: 100%;
  }

  .ratio-4x3 {
    --bs-aspect-ratio: calc(3 / 4 * 100%);
  }

  .ratio-16x9 {
    --bs-aspect-ratio: calc(9 / 16 * 100%);
  }

  .ratio-21x9 {
    --bs-aspect-ratio: calc(9 / 21 * 100%);
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }

  @media (min-width: 576px) {
    .sticky-sm-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 768px) {
    .sticky-md-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 992px) {
    .sticky-lg-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 1200px) {
    .sticky-xl-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 1400px) {
    .sticky-xxl-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }
  .visually-hidden,
  .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }

  .float-start {
    float: left !important;
  }

  .float-end {
    float: right !important;
  }

  .float-none {
    float: none !important;
  }

  .overflow-auto {
    overflow: auto !important;
  }

  .overflow-hidden {
    overflow: hidden !important;
  }

  .overflow-visible {
    overflow: visible !important;
  }

  .overflow-scroll {
    overflow: scroll !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-grid {
    display: grid !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  .d-none {
    display: none !important;
  }

  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }

  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }

  .shadow-none {
    box-shadow: none !important;
  }

  .position-static {
    position: static !important;
  }

  .position-relative {
    position: relative !important;
  }

  .position-absolute {
    position: absolute !important;
  }

  .position-fixed {
    position: fixed !important;
  }

  .position-sticky {
    position: sticky !important;
  }

  .top-0 {
    top: 0 !important;
  }

  .top-50 {
    top: 50% !important;
  }

  .top-100 {
    top: 100% !important;
  }

  .bottom-0 {
    bottom: 0 !important;
  }

  .bottom-50 {
    bottom: 50% !important;
  }

  .bottom-100 {
    bottom: 100% !important;
  }

  .start-0 {
    left: 0 !important;
  }

  .start-50 {
    left: 50% !important;
  }

  .start-100 {
    left: 100% !important;
  }

  .end-0 {
    right: 0 !important;
  }

  .end-50 {
    right: 50% !important;
  }

  .end-100 {
    right: 100% !important;
  }

  .translate-middle {
    transform: translate(-50%, -50%) !important;
  }

  .translate-middle-x {
    transform: translateX(-50%) !important;
  }

  .translate-middle-y {
    transform: translateY(-50%) !important;
  }

  .border {
    border: 1px solid #dee2e6 !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top {
    border-top: 1px solid #dee2e6 !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-end {
    border-right: 1px solid #dee2e6 !important;
  }

  .border-end-0 {
    border-right: 0 !important;
  }

  .border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-start {
    border-left: 1px solid #dee2e6 !important;
  }

  .border-start-0 {
    border-left: 0 !important;
  }

  .border-primary {
    border-color: #2937f0 !important;
  }

  .border-secondary {
    border-color: #9f1ae2 !important;
  }

  .border-success {
    border-color: #198754 !important;
  }

  .border-info {
    border-color: #0dcaf0 !important;
  }

  .border-warning {
    border-color: #ffc107 !important;
  }

  .border-danger {
    border-color: #dc3545 !important;
  }

  .border-light {
    border-color: #f8f9fa !important;
  }

  .border-dark {
    border-color: #212529 !important;
  }

  .border-white {
    border-color: #fff !important;
  }

  .border-1 {
    border-width: 1px !important;
  }

  .border-2 {
    border-width: 2px !important;
  }

  .border-3 {
    border-width: 3px !important;
  }

  .border-4 {
    border-width: 4px !important;
  }

  .border-5 {
    border-width: 5px !important;
  }

  .w-25 {
    width: 25% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-auto {
    width: auto !important;
  }

  .mw-100 {
    max-width: 100% !important;
  }

  .vw-100 {
    width: 100vw !important;
  }

  .min-vw-100 {
    min-width: 100vw !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .h-auto {
    height: auto !important;
  }

  .mh-100 {
    max-height: 100% !important;
  }

  .vh-100 {
    height: 100vh !important;
  }

  .min-vh-100 {
    min-height: 100vh !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-0 {
    gap: 0 !important;
  }

  .gap-1 {
    gap: 0.25rem !important;
  }

  .gap-2 {
    gap: 0.5rem !important;
  }

  .gap-3 {
    gap: 1rem !important;
  }

  .gap-4 {
    gap: 1.5rem !important;
  }

  .gap-5 {
    gap: 3rem !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .justify-content-around {
    justify-content: space-around !important;
  }

  .justify-content-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  .order-first {
    order: -1 !important;
  }

  .order-0 {
    order: 0 !important;
  }

  .order-1 {
    order: 1 !important;
  }

  .order-2 {
    order: 2 !important;
  }

  .order-3 {
    order: 3 !important;
  }

  .order-4 {
    order: 4 !important;
  }

  .order-5 {
    order: 5 !important;
  }

  .order-last {
    order: 6 !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .m-3 {
    margin: 1rem !important;
  }

  .m-4 {
    margin: 1.5rem !important;
  }

  .m-5 {
    margin: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mt-1 {
    margin-top: 0.25rem !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }

  .mt-4 {
    margin-top: 1.5rem !important;
  }

  .mt-5 {
    margin-top: 3rem !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .me-0 {
    margin-right: 0 !important;
  }

  .me-1 {
    margin-right: 0.25rem !important;
  }

  .me-2 {
    margin-right: 0.5rem !important;
  }

  .me-3 {
    margin-right: 1rem !important;
  }

  .me-4 {
    margin-right: 1.5rem !important;
  }

  .me-5 {
    margin-right: 3rem !important;
  }

  .me-auto {
    margin-right: auto !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-3 {
    margin-bottom: 1rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-5 {
    margin-bottom: 3rem !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ms-0 {
    margin-left: 0 !important;
  }

  .ms-1 {
    margin-left: 0.25rem !important;
  }

  .ms-2 {
    margin-left: 0.5rem !important;
  }

  .ms-3 {
    margin-left: 1rem !important;
  }

  .ms-4 {
    margin-left: 1.5rem !important;
  }

  .ms-5 {
    margin-left: 3rem !important;
  }

  .ms-auto {
    margin-left: auto !important;
  }

  .p-0 {
    padding: 0 !important;
  }

  .p-1 {
    padding: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .p-3 {
    padding: 1rem !important;
  }

  .p-4 {
    padding: 1.5rem !important;
  }

  .p-5 {
    padding: 3rem !important;
  }

  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pt-1 {
    padding-top: 0.25rem !important;
  }

  .pt-2 {
    padding-top: 0.5rem !important;
  }

  .pt-3 {
    padding-top: 1rem !important;
  }

  .pt-4 {
    padding-top: 1.5rem !important;
  }

  .pt-5 {
    padding-top: 3rem !important;
  }

  .pe-0 {
    padding-right: 0 !important;
  }

  .pe-1 {
    padding-right: 0.25rem !important;
  }

  .pe-2 {
    padding-right: 0.5rem !important;
  }

  .pe-3 {
    padding-right: 1rem !important;
  }

  .pe-4 {
    padding-right: 1.5rem !important;
  }

  .pe-5 {
    padding-right: 3rem !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pb-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-3 {
    padding-bottom: 1rem !important;
  }

  .pb-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-5 {
    padding-bottom: 3rem !important;
  }

  .ps-0 {
    padding-left: 0 !important;
  }

  .ps-1 {
    padding-left: 0.25rem !important;
  }

  .ps-2 {
    padding-left: 0.5rem !important;
  }

  .ps-3 {
    padding-left: 1rem !important;
  }

  .ps-4 {
    padding-left: 1.5rem !important;
  }

  .ps-5 {
    padding-left: 3rem !important;
  }

  .font-monospace {
    font-family: var(--bs-font-monospace) !important;
  }

  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }

  .fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }

  .fs-3 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }

  .fs-4 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }

  .fs-5 {
    font-size: 1.25rem !important;
  }

  .fs-6 {
    font-size: 1rem !important;
  }

  .fst-italic {
    font-style: italic !important;
  }

  .fst-normal {
    font-style: normal !important;
  }

  .fw-light {
    font-weight: 300 !important;
  }

  .fw-lighter {
    font-weight: lighter !important;
  }

  .fw-normal {
    font-weight: 500 !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }

  .fw-bolder {
    font-weight: bolder !important;
  }

  .lh-1 {
    line-height: 1 !important;
  }

  .lh-sm {
    line-height: 1.25 !important;
  }

  .lh-base {
    line-height: 1.5 !important;
  }

  .lh-lg {
    line-height: 2 !important;
  }

  .text-start {
    text-align: left !important;
  }

  .text-end {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .text-decoration-underline {
    text-decoration: underline !important;
  }

  .text-decoration-line-through {
    text-decoration: line-through !important;
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .text-wrap {
    white-space: normal !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  /* rtl:begin:remove */
  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }

  /* rtl:end:remove */
  .text-primary {
    color: #2937f0 !important;
  }

  .text-secondary {
    color: #9f1ae2 !important;
  }

  .text-success {
    color: #198754 !important;
  }

  .text-info {
    color: #0dcaf0 !important;
  }

  .text-warning {
    color: #ffc107 !important;
  }

  .text-danger {
    color: #dc3545 !important;
  }

  .text-light {
    color: #f8f9fa !important;
  }

  .text-dark {
    color: #212529 !important;
  }

  .text-white {
    color: #fff !important;
  }

  .text-body {
    color: #212529 !important;
  }

  .text-muted {
    color: #6c757d !important;
  }

  .text-black-50 {
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .text-white-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .text-reset {
    color: inherit !important;
  }

  .bg-primary {
    background-color: #2937f0 !important;
  }

  .bg-secondary {
    background-color: #9f1ae2 !important;
  }

  .bg-success {
    background-color: #198754 !important;
  }

  .bg-info {
    background-color: #0dcaf0 !important;
  }

  .bg-warning {
    background-color: #ffc107 !important;
  }

  .bg-danger {
    background-color: #dc3545 !important;
  }

  .bg-light {
    background-color: #f8f9fa !important;
  }

  .bg-dark {
    background-color: #212529 !important;
  }

  .bg-body {
    background-color: #fff !important;
  }

  .bg-white {
    background-color: #fff !important;
  }

  .bg-transparent {
    background-color: transparent !important;
  }

  .bg-gradient {
    background-image: var(--bs-gradient) !important;
  }

  .user-select-all {
    -webkit-user-select: all !important;
    -moz-user-select: all !important;
    user-select: all !important;
  }

  .user-select-auto {
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
  }

  .user-select-none {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }

  .pe-none {
    pointer-events: none !important;
  }

  .pe-auto {
    pointer-events: auto !important;
  }

  .rounded {
    border-radius: 0.25rem !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .rounded-1 {
    border-radius: 0.2rem !important;
  }

  .rounded-2 {
    border-radius: 0.25rem !important;
  }

  .rounded-3 {
    border-radius: 0.3rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-pill {
    border-radius: 50rem !important;
  }

  .rounded-top {
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
  }

  .rounded-end {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .rounded-start {
    border-bottom-left-radius: 0.25rem !important;
    border-top-left-radius: 0.25rem !important;
  }

  .visible {
    visibility: visible !important;
  }

  .invisible {
    visibility: hidden !important;
  }

  @media (min-width: 576px) {
    .float-sm-start {
      float: left !important;
    }

    .float-sm-end {
      float: right !important;
    }

    .float-sm-none {
      float: none !important;
    }

    .d-sm-inline {
      display: inline !important;
    }

    .d-sm-inline-block {
      display: inline-block !important;
    }

    .d-sm-block {
      display: block !important;
    }

    .d-sm-grid {
      display: grid !important;
    }

    .d-sm-table {
      display: table !important;
    }

    .d-sm-table-row {
      display: table-row !important;
    }

    .d-sm-table-cell {
      display: table-cell !important;
    }

    .d-sm-flex {
      display: flex !important;
    }

    .d-sm-inline-flex {
      display: inline-flex !important;
    }

    .d-sm-none {
      display: none !important;
    }

    .flex-sm-fill {
      flex: 1 1 auto !important;
    }

    .flex-sm-row {
      flex-direction: row !important;
    }

    .flex-sm-column {
      flex-direction: column !important;
    }

    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }

    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .gap-sm-0 {
      gap: 0 !important;
    }

    .gap-sm-1 {
      gap: 0.25rem !important;
    }

    .gap-sm-2 {
      gap: 0.5rem !important;
    }

    .gap-sm-3 {
      gap: 1rem !important;
    }

    .gap-sm-4 {
      gap: 1.5rem !important;
    }

    .gap-sm-5 {
      gap: 3rem !important;
    }

    .justify-content-sm-start {
      justify-content: flex-start !important;
    }

    .justify-content-sm-end {
      justify-content: flex-end !important;
    }

    .justify-content-sm-center {
      justify-content: center !important;
    }

    .justify-content-sm-between {
      justify-content: space-between !important;
    }

    .justify-content-sm-around {
      justify-content: space-around !important;
    }

    .justify-content-sm-evenly {
      justify-content: space-evenly !important;
    }

    .align-items-sm-start {
      align-items: flex-start !important;
    }

    .align-items-sm-end {
      align-items: flex-end !important;
    }

    .align-items-sm-center {
      align-items: center !important;
    }

    .align-items-sm-baseline {
      align-items: baseline !important;
    }

    .align-items-sm-stretch {
      align-items: stretch !important;
    }

    .align-content-sm-start {
      align-content: flex-start !important;
    }

    .align-content-sm-end {
      align-content: flex-end !important;
    }

    .align-content-sm-center {
      align-content: center !important;
    }

    .align-content-sm-between {
      align-content: space-between !important;
    }

    .align-content-sm-around {
      align-content: space-around !important;
    }

    .align-content-sm-stretch {
      align-content: stretch !important;
    }

    .align-self-sm-auto {
      align-self: auto !important;
    }

    .align-self-sm-start {
      align-self: flex-start !important;
    }

    .align-self-sm-end {
      align-self: flex-end !important;
    }

    .align-self-sm-center {
      align-self: center !important;
    }

    .align-self-sm-baseline {
      align-self: baseline !important;
    }

    .align-self-sm-stretch {
      align-self: stretch !important;
    }

    .order-sm-first {
      order: -1 !important;
    }

    .order-sm-0 {
      order: 0 !important;
    }

    .order-sm-1 {
      order: 1 !important;
    }

    .order-sm-2 {
      order: 2 !important;
    }

    .order-sm-3 {
      order: 3 !important;
    }

    .order-sm-4 {
      order: 4 !important;
    }

    .order-sm-5 {
      order: 5 !important;
    }

    .order-sm-last {
      order: 6 !important;
    }

    .m-sm-0 {
      margin: 0 !important;
    }

    .m-sm-1 {
      margin: 0.25rem !important;
    }

    .m-sm-2 {
      margin: 0.5rem !important;
    }

    .m-sm-3 {
      margin: 1rem !important;
    }

    .m-sm-4 {
      margin: 1.5rem !important;
    }

    .m-sm-5 {
      margin: 3rem !important;
    }

    .m-sm-auto {
      margin: auto !important;
    }

    .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-sm-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .my-sm-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .my-sm-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .my-sm-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .my-sm-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .my-sm-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-sm-0 {
      margin-top: 0 !important;
    }

    .mt-sm-1 {
      margin-top: 0.25rem !important;
    }

    .mt-sm-2 {
      margin-top: 0.5rem !important;
    }

    .mt-sm-3 {
      margin-top: 1rem !important;
    }

    .mt-sm-4 {
      margin-top: 1.5rem !important;
    }

    .mt-sm-5 {
      margin-top: 3rem !important;
    }

    .mt-sm-auto {
      margin-top: auto !important;
    }

    .me-sm-0 {
      margin-right: 0 !important;
    }

    .me-sm-1 {
      margin-right: 0.25rem !important;
    }

    .me-sm-2 {
      margin-right: 0.5rem !important;
    }

    .me-sm-3 {
      margin-right: 1rem !important;
    }

    .me-sm-4 {
      margin-right: 1.5rem !important;
    }

    .me-sm-5 {
      margin-right: 3rem !important;
    }

    .me-sm-auto {
      margin-right: auto !important;
    }

    .mb-sm-0 {
      margin-bottom: 0 !important;
    }

    .mb-sm-1 {
      margin-bottom: 0.25rem !important;
    }

    .mb-sm-2 {
      margin-bottom: 0.5rem !important;
    }

    .mb-sm-3 {
      margin-bottom: 1rem !important;
    }

    .mb-sm-4 {
      margin-bottom: 1.5rem !important;
    }

    .mb-sm-5 {
      margin-bottom: 3rem !important;
    }

    .mb-sm-auto {
      margin-bottom: auto !important;
    }

    .ms-sm-0 {
      margin-left: 0 !important;
    }

    .ms-sm-1 {
      margin-left: 0.25rem !important;
    }

    .ms-sm-2 {
      margin-left: 0.5rem !important;
    }

    .ms-sm-3 {
      margin-left: 1rem !important;
    }

    .ms-sm-4 {
      margin-left: 1.5rem !important;
    }

    .ms-sm-5 {
      margin-left: 3rem !important;
    }

    .ms-sm-auto {
      margin-left: auto !important;
    }

    .p-sm-0 {
      padding: 0 !important;
    }

    .p-sm-1 {
      padding: 0.25rem !important;
    }

    .p-sm-2 {
      padding: 0.5rem !important;
    }

    .p-sm-3 {
      padding: 1rem !important;
    }

    .p-sm-4 {
      padding: 1.5rem !important;
    }

    .p-sm-5 {
      padding: 3rem !important;
    }

    .px-sm-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .px-sm-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .px-sm-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .px-sm-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .px-sm-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .px-sm-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-sm-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .py-sm-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .py-sm-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .py-sm-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .py-sm-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .py-sm-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .pt-sm-0 {
      padding-top: 0 !important;
    }

    .pt-sm-1 {
      padding-top: 0.25rem !important;
    }

    .pt-sm-2 {
      padding-top: 0.5rem !important;
    }

    .pt-sm-3 {
      padding-top: 1rem !important;
    }

    .pt-sm-4 {
      padding-top: 1.5rem !important;
    }

    .pt-sm-5 {
      padding-top: 3rem !important;
    }

    .pe-sm-0 {
      padding-right: 0 !important;
    }

    .pe-sm-1 {
      padding-right: 0.25rem !important;
    }

    .pe-sm-2 {
      padding-right: 0.5rem !important;
    }

    .pe-sm-3 {
      padding-right: 1rem !important;
    }

    .pe-sm-4 {
      padding-right: 1.5rem !important;
    }

    .pe-sm-5 {
      padding-right: 3rem !important;
    }

    .pb-sm-0 {
      padding-bottom: 0 !important;
    }

    .pb-sm-1 {
      padding-bottom: 0.25rem !important;
    }

    .pb-sm-2 {
      padding-bottom: 0.5rem !important;
    }

    .pb-sm-3 {
      padding-bottom: 1rem !important;
    }

    .pb-sm-4 {
      padding-bottom: 1.5rem !important;
    }

    .pb-sm-5 {
      padding-bottom: 3rem !important;
    }

    .ps-sm-0 {
      padding-left: 0 !important;
    }

    .ps-sm-1 {
      padding-left: 0.25rem !important;
    }

    .ps-sm-2 {
      padding-left: 0.5rem !important;
    }

    .ps-sm-3 {
      padding-left: 1rem !important;
    }

    .ps-sm-4 {
      padding-left: 1.5rem !important;
    }

    .ps-sm-5 {
      padding-left: 3rem !important;
    }

    .text-sm-start {
      text-align: left !important;
    }

    .text-sm-end {
      text-align: right !important;
    }

    .text-sm-center {
      text-align: center !important;
    }
  }
  @media (min-width: 768px) {
    .float-md-start {
      float: left !important;
    }

    .float-md-end {
      float: right !important;
    }

    .float-md-none {
      float: none !important;
    }

    .d-md-inline {
      display: inline !important;
    }

    .d-md-inline-block {
      display: inline-block !important;
    }

    .d-md-block {
      display: block !important;
    }

    .d-md-grid {
      display: grid !important;
    }

    .d-md-table {
      display: table !important;
    }

    .d-md-table-row {
      display: table-row !important;
    }

    .d-md-table-cell {
      display: table-cell !important;
    }

    .d-md-flex {
      display: flex !important;
    }

    .d-md-inline-flex {
      display: inline-flex !important;
    }

    .d-md-none {
      display: none !important;
    }

    .flex-md-fill {
      flex: 1 1 auto !important;
    }

    .flex-md-row {
      flex-direction: row !important;
    }

    .flex-md-column {
      flex-direction: column !important;
    }

    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-md-wrap {
      flex-wrap: wrap !important;
    }

    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .gap-md-0 {
      gap: 0 !important;
    }

    .gap-md-1 {
      gap: 0.25rem !important;
    }

    .gap-md-2 {
      gap: 0.5rem !important;
    }

    .gap-md-3 {
      gap: 1rem !important;
    }

    .gap-md-4 {
      gap: 1.5rem !important;
    }

    .gap-md-5 {
      gap: 3rem !important;
    }

    .justify-content-md-start {
      justify-content: flex-start !important;
    }

    .justify-content-md-end {
      justify-content: flex-end !important;
    }

    .justify-content-md-center {
      justify-content: center !important;
    }

    .justify-content-md-between {
      justify-content: space-between !important;
    }

    .justify-content-md-around {
      justify-content: space-around !important;
    }

    .justify-content-md-evenly {
      justify-content: space-evenly !important;
    }

    .align-items-md-start {
      align-items: flex-start !important;
    }

    .align-items-md-end {
      align-items: flex-end !important;
    }

    .align-items-md-center {
      align-items: center !important;
    }

    .align-items-md-baseline {
      align-items: baseline !important;
    }

    .align-items-md-stretch {
      align-items: stretch !important;
    }

    .align-content-md-start {
      align-content: flex-start !important;
    }

    .align-content-md-end {
      align-content: flex-end !important;
    }

    .align-content-md-center {
      align-content: center !important;
    }

    .align-content-md-between {
      align-content: space-between !important;
    }

    .align-content-md-around {
      align-content: space-around !important;
    }

    .align-content-md-stretch {
      align-content: stretch !important;
    }

    .align-self-md-auto {
      align-self: auto !important;
    }

    .align-self-md-start {
      align-self: flex-start !important;
    }

    .align-self-md-end {
      align-self: flex-end !important;
    }

    .align-self-md-center {
      align-self: center !important;
    }

    .align-self-md-baseline {
      align-self: baseline !important;
    }

    .align-self-md-stretch {
      align-self: stretch !important;
    }

    .order-md-first {
      order: -1 !important;
    }

    .order-md-0 {
      order: 0 !important;
    }

    .order-md-1 {
      order: 1 !important;
    }

    .order-md-2 {
      order: 2 !important;
    }

    .order-md-3 {
      order: 3 !important;
    }

    .order-md-4 {
      order: 4 !important;
    }

    .order-md-5 {
      order: 5 !important;
    }

    .order-md-last {
      order: 6 !important;
    }

    .m-md-0 {
      margin: 0 !important;
    }

    .m-md-1 {
      margin: 0.25rem !important;
    }

    .m-md-2 {
      margin: 0.5rem !important;
    }

    .m-md-3 {
      margin: 1rem !important;
    }

    .m-md-4 {
      margin: 1.5rem !important;
    }

    .m-md-5 {
      margin: 3rem !important;
    }

    .m-md-auto {
      margin: auto !important;
    }

    .mx-md-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-md-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .my-md-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .my-md-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .my-md-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .my-md-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .my-md-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-md-0 {
      margin-top: 0 !important;
    }

    .mt-md-1 {
      margin-top: 0.25rem !important;
    }

    .mt-md-2 {
      margin-top: 0.5rem !important;
    }

    .mt-md-3 {
      margin-top: 1rem !important;
    }

    .mt-md-4 {
      margin-top: 1.5rem !important;
    }

    .mt-md-5 {
      margin-top: 3rem !important;
    }

    .mt-md-auto {
      margin-top: auto !important;
    }

    .me-md-0 {
      margin-right: 0 !important;
    }

    .me-md-1 {
      margin-right: 0.25rem !important;
    }

    .me-md-2 {
      margin-right: 0.5rem !important;
    }

    .me-md-3 {
      margin-right: 1rem !important;
    }

    .me-md-4 {
      margin-right: 1.5rem !important;
    }

    .me-md-5 {
      margin-right: 3rem !important;
    }

    .me-md-auto {
      margin-right: auto !important;
    }

    .mb-md-0 {
      margin-bottom: 0 !important;
    }

    .mb-md-1 {
      margin-bottom: 0.25rem !important;
    }

    .mb-md-2 {
      margin-bottom: 0.5rem !important;
    }

    .mb-md-3 {
      margin-bottom: 1rem !important;
    }

    .mb-md-4 {
      margin-bottom: 1.5rem !important;
    }

    .mb-md-5 {
      margin-bottom: 3rem !important;
    }

    .mb-md-auto {
      margin-bottom: auto !important;
    }

    .ms-md-0 {
      margin-left: 0 !important;
    }

    .ms-md-1 {
      margin-left: 0.25rem !important;
    }

    .ms-md-2 {
      margin-left: 0.5rem !important;
    }

    .ms-md-3 {
      margin-left: 1rem !important;
    }

    .ms-md-4 {
      margin-left: 1.5rem !important;
    }

    .ms-md-5 {
      margin-left: 3rem !important;
    }

    .ms-md-auto {
      margin-left: auto !important;
    }

    .p-md-0 {
      padding: 0 !important;
    }

    .p-md-1 {
      padding: 0.25rem !important;
    }

    .p-md-2 {
      padding: 0.5rem !important;
    }

    .p-md-3 {
      padding: 1rem !important;
    }

    .p-md-4 {
      padding: 1.5rem !important;
    }

    .p-md-5 {
      padding: 3rem !important;
    }

    .px-md-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .px-md-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .px-md-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .px-md-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .px-md-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .px-md-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-md-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .py-md-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .py-md-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .py-md-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .py-md-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .py-md-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .pt-md-0 {
      padding-top: 0 !important;
    }

    .pt-md-1 {
      padding-top: 0.25rem !important;
    }

    .pt-md-2 {
      padding-top: 0.5rem !important;
    }

    .pt-md-3 {
      padding-top: 1rem !important;
    }

    .pt-md-4 {
      padding-top: 1.5rem !important;
    }

    .pt-md-5 {
      padding-top: 3rem !important;
    }

    .pe-md-0 {
      padding-right: 0 !important;
    }

    .pe-md-1 {
      padding-right: 0.25rem !important;
    }

    .pe-md-2 {
      padding-right: 0.5rem !important;
    }

    .pe-md-3 {
      padding-right: 1rem !important;
    }

    .pe-md-4 {
      padding-right: 1.5rem !important;
    }

    .pe-md-5 {
      padding-right: 3rem !important;
    }

    .pb-md-0 {
      padding-bottom: 0 !important;
    }

    .pb-md-1 {
      padding-bottom: 0.25rem !important;
    }

    .pb-md-2 {
      padding-bottom: 0.5rem !important;
    }

    .pb-md-3 {
      padding-bottom: 1rem !important;
    }

    .pb-md-4 {
      padding-bottom: 1.5rem !important;
    }

    .pb-md-5 {
      padding-bottom: 3rem !important;
    }

    .ps-md-0 {
      padding-left: 0 !important;
    }

    .ps-md-1 {
      padding-left: 0.25rem !important;
    }

    .ps-md-2 {
      padding-left: 0.5rem !important;
    }

    .ps-md-3 {
      padding-left: 1rem !important;
    }

    .ps-md-4 {
      padding-left: 1.5rem !important;
    }

    .ps-md-5 {
      padding-left: 3rem !important;
    }

    .text-md-start {
      text-align: left !important;
    }

    .text-md-end {
      text-align: right !important;
    }

    .text-md-center {
      text-align: center !important;
    }
  }
  @media (min-width: 992px) {
    .float-lg-start {
      float: left !important;
    }

    .float-lg-end {
      float: right !important;
    }

    .float-lg-none {
      float: none !important;
    }

    .d-lg-inline {
      display: inline !important;
    }

    .d-lg-inline-block {
      display: inline-block !important;
    }

    .d-lg-block {
      display: block !important;
    }

    .d-lg-grid {
      display: grid !important;
    }

    .d-lg-table {
      display: table !important;
    }

    .d-lg-table-row {
      display: table-row !important;
    }

    .d-lg-table-cell {
      display: table-cell !important;
    }

    .d-lg-flex {
      display: flex !important;
    }

    .d-lg-inline-flex {
      display: inline-flex !important;
    }

    .d-lg-none {
      display: none !important;
    }

    .flex-lg-fill {
      flex: 1 1 auto !important;
    }

    .flex-lg-row {
      flex-direction: row !important;
    }

    .flex-lg-column {
      flex-direction: column !important;
    }

    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }

    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .gap-lg-0 {
      gap: 0 !important;
    }

    .gap-lg-1 {
      gap: 0.25rem !important;
    }

    .gap-lg-2 {
      gap: 0.5rem !important;
    }

    .gap-lg-3 {
      gap: 1rem !important;
    }

    .gap-lg-4 {
      gap: 1.5rem !important;
    }

    .gap-lg-5 {
      gap: 3rem !important;
    }

    .justify-content-lg-start {
      justify-content: flex-start !important;
    }

    .justify-content-lg-end {
      justify-content: flex-end !important;
    }

    .justify-content-lg-center {
      justify-content: center !important;
    }

    .justify-content-lg-between {
      justify-content: space-between !important;
    }

    .justify-content-lg-around {
      justify-content: space-around !important;
    }

    .justify-content-lg-evenly {
      justify-content: space-evenly !important;
    }

    .align-items-lg-start {
      align-items: flex-start !important;
    }

    .align-items-lg-end {
      align-items: flex-end !important;
    }

    .align-items-lg-center {
      align-items: center !important;
    }

    .align-items-lg-baseline {
      align-items: baseline !important;
    }

    .align-items-lg-stretch {
      align-items: stretch !important;
    }

    .align-content-lg-start {
      align-content: flex-start !important;
    }

    .align-content-lg-end {
      align-content: flex-end !important;
    }

    .align-content-lg-center {
      align-content: center !important;
    }

    .align-content-lg-between {
      align-content: space-between !important;
    }

    .align-content-lg-around {
      align-content: space-around !important;
    }

    .align-content-lg-stretch {
      align-content: stretch !important;
    }

    .align-self-lg-auto {
      align-self: auto !important;
    }

    .align-self-lg-start {
      align-self: flex-start !important;
    }

    .align-self-lg-end {
      align-self: flex-end !important;
    }

    .align-self-lg-center {
      align-self: center !important;
    }

    .align-self-lg-baseline {
      align-self: baseline !important;
    }

    .align-self-lg-stretch {
      align-self: stretch !important;
    }

    .order-lg-first {
      order: -1 !important;
    }

    .order-lg-0 {
      order: 0 !important;
    }

    .order-lg-1 {
      order: 1 !important;
    }

    .order-lg-2 {
      order: 2 !important;
    }

    .order-lg-3 {
      order: 3 !important;
    }

    .order-lg-4 {
      order: 4 !important;
    }

    .order-lg-5 {
      order: 5 !important;
    }

    .order-lg-last {
      order: 6 !important;
    }

    .m-lg-0 {
      margin: 0 !important;
    }

    .m-lg-1 {
      margin: 0.25rem !important;
    }

    .m-lg-2 {
      margin: 0.5rem !important;
    }

    .m-lg-3 {
      margin: 1rem !important;
    }

    .m-lg-4 {
      margin: 1.5rem !important;
    }

    .m-lg-5 {
      margin: 3rem !important;
    }

    .m-lg-auto {
      margin: auto !important;
    }

    .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-lg-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .my-lg-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .my-lg-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .my-lg-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .my-lg-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .my-lg-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-lg-0 {
      margin-top: 0 !important;
    }

    .mt-lg-1 {
      margin-top: 0.25rem !important;
    }

    .mt-lg-2 {
      margin-top: 0.5rem !important;
    }

    .mt-lg-3 {
      margin-top: 1rem !important;
    }

    .mt-lg-4 {
      margin-top: 1.5rem !important;
    }

    .mt-lg-5 {
      margin-top: 3rem !important;
    }

    .mt-lg-auto {
      margin-top: auto !important;
    }

    .me-lg-0 {
      margin-right: 0 !important;
    }

    .me-lg-1 {
      margin-right: 0.25rem !important;
    }

    .me-lg-2 {
      margin-right: 0.5rem !important;
    }

    .me-lg-3 {
      margin-right: 1rem !important;
    }

    .me-lg-4 {
      margin-right: 1.5rem !important;
    }

    .me-lg-5 {
      margin-right: 3rem !important;
    }

    .me-lg-auto {
      margin-right: auto !important;
    }

    .mb-lg-0 {
      margin-bottom: 0 !important;
    }

    .mb-lg-1 {
      margin-bottom: 0.25rem !important;
    }

    .mb-lg-2 {
      margin-bottom: 0.5rem !important;
    }

    .mb-lg-3 {
      margin-bottom: 1rem !important;
    }

    .mb-lg-4 {
      margin-bottom: 1.5rem !important;
    }

    .mb-lg-5 {
      margin-bottom: 3rem !important;
    }

    .mb-lg-auto {
      margin-bottom: auto !important;
    }

    .ms-lg-0 {
      margin-left: 0 !important;
    }

    .ms-lg-1 {
      margin-left: 0.25rem !important;
    }

    .ms-lg-2 {
      margin-left: 0.5rem !important;
    }

    .ms-lg-3 {
      margin-left: 1rem !important;
    }

    .ms-lg-4 {
      margin-left: 1.5rem !important;
    }

    .ms-lg-5 {
      margin-left: 3rem !important;
    }

    .ms-lg-auto {
      margin-left: auto !important;
    }

    .p-lg-0 {
      padding: 0 !important;
    }

    .p-lg-1 {
      padding: 0.25rem !important;
    }

    .p-lg-2 {
      padding: 0.5rem !important;
    }

    .p-lg-3 {
      padding: 1rem !important;
    }

    .p-lg-4 {
      padding: 1.5rem !important;
    }

    .p-lg-5 {
      padding: 3rem !important;
    }

    .px-lg-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .px-lg-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .px-lg-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .px-lg-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .px-lg-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .px-lg-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-lg-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .py-lg-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .py-lg-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .py-lg-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .py-lg-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .py-lg-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .pt-lg-0 {
      padding-top: 0 !important;
    }

    .pt-lg-1 {
      padding-top: 0.25rem !important;
    }

    .pt-lg-2 {
      padding-top: 0.5rem !important;
    }

    .pt-lg-3 {
      padding-top: 1rem !important;
    }

    .pt-lg-4 {
      padding-top: 1.5rem !important;
    }

    .pt-lg-5 {
      padding-top: 3rem !important;
    }

    .pe-lg-0 {
      padding-right: 0 !important;
    }

    .pe-lg-1 {
      padding-right: 0.25rem !important;
    }

    .pe-lg-2 {
      padding-right: 0.5rem !important;
    }

    .pe-lg-3 {
      padding-right: 1rem !important;
    }

    .pe-lg-4 {
      padding-right: 1.5rem !important;
    }

    .pe-lg-5 {
      padding-right: 3rem !important;
    }

    .pb-lg-0 {
      padding-bottom: 0 !important;
    }

    .pb-lg-1 {
      padding-bottom: 0.25rem !important;
    }

    .pb-lg-2 {
      padding-bottom: 0.5rem !important;
    }

    .pb-lg-3 {
      padding-bottom: 1rem !important;
    }

    .pb-lg-4 {
      padding-bottom: 1.5rem !important;
    }

    .pb-lg-5 {
      padding-bottom: 3rem !important;
    }

    .ps-lg-0 {
      padding-left: 0 !important;
    }

    .ps-lg-1 {
      padding-left: 0.25rem !important;
    }

    .ps-lg-2 {
      padding-left: 0.5rem !important;
    }

    .ps-lg-3 {
      padding-left: 1rem !important;
    }

    .ps-lg-4 {
      padding-left: 1.5rem !important;
    }

    .ps-lg-5 {
      padding-left: 3rem !important;
    }

    .text-lg-start {
      text-align: left !important;
    }

    .text-lg-end {
      text-align: right !important;
    }

    .text-lg-center {
      text-align: center !important;
    }
  }
  @media (min-width: 1200px) {
    .float-xl-start {
      float: left !important;
    }

    .float-xl-end {
      float: right !important;
    }

    .float-xl-none {
      float: none !important;
    }

    .d-xl-inline {
      display: inline !important;
    }

    .d-xl-inline-block {
      display: inline-block !important;
    }

    .d-xl-block {
      display: block !important;
    }

    .d-xl-grid {
      display: grid !important;
    }

    .d-xl-table {
      display: table !important;
    }

    .d-xl-table-row {
      display: table-row !important;
    }

    .d-xl-table-cell {
      display: table-cell !important;
    }

    .d-xl-flex {
      display: flex !important;
    }

    .d-xl-inline-flex {
      display: inline-flex !important;
    }

    .d-xl-none {
      display: none !important;
    }

    .flex-xl-fill {
      flex: 1 1 auto !important;
    }

    .flex-xl-row {
      flex-direction: row !important;
    }

    .flex-xl-column {
      flex-direction: column !important;
    }

    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }

    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .gap-xl-0 {
      gap: 0 !important;
    }

    .gap-xl-1 {
      gap: 0.25rem !important;
    }

    .gap-xl-2 {
      gap: 0.5rem !important;
    }

    .gap-xl-3 {
      gap: 1rem !important;
    }

    .gap-xl-4 {
      gap: 1.5rem !important;
    }

    .gap-xl-5 {
      gap: 3rem !important;
    }

    .justify-content-xl-start {
      justify-content: flex-start !important;
    }

    .justify-content-xl-end {
      justify-content: flex-end !important;
    }

    .justify-content-xl-center {
      justify-content: center !important;
    }

    .justify-content-xl-between {
      justify-content: space-between !important;
    }

    .justify-content-xl-around {
      justify-content: space-around !important;
    }

    .justify-content-xl-evenly {
      justify-content: space-evenly !important;
    }

    .align-items-xl-start {
      align-items: flex-start !important;
    }

    .align-items-xl-end {
      align-items: flex-end !important;
    }

    .align-items-xl-center {
      align-items: center !important;
    }

    .align-items-xl-baseline {
      align-items: baseline !important;
    }

    .align-items-xl-stretch {
      align-items: stretch !important;
    }

    .align-content-xl-start {
      align-content: flex-start !important;
    }

    .align-content-xl-end {
      align-content: flex-end !important;
    }

    .align-content-xl-center {
      align-content: center !important;
    }

    .align-content-xl-between {
      align-content: space-between !important;
    }

    .align-content-xl-around {
      align-content: space-around !important;
    }

    .align-content-xl-stretch {
      align-content: stretch !important;
    }

    .align-self-xl-auto {
      align-self: auto !important;
    }

    .align-self-xl-start {
      align-self: flex-start !important;
    }

    .align-self-xl-end {
      align-self: flex-end !important;
    }

    .align-self-xl-center {
      align-self: center !important;
    }

    .align-self-xl-baseline {
      align-self: baseline !important;
    }

    .align-self-xl-stretch {
      align-self: stretch !important;
    }

    .order-xl-first {
      order: -1 !important;
    }

    .order-xl-0 {
      order: 0 !important;
    }

    .order-xl-1 {
      order: 1 !important;
    }

    .order-xl-2 {
      order: 2 !important;
    }

    .order-xl-3 {
      order: 3 !important;
    }

    .order-xl-4 {
      order: 4 !important;
    }

    .order-xl-5 {
      order: 5 !important;
    }

    .order-xl-last {
      order: 6 !important;
    }

    .m-xl-0 {
      margin: 0 !important;
    }

    .m-xl-1 {
      margin: 0.25rem !important;
    }

    .m-xl-2 {
      margin: 0.5rem !important;
    }

    .m-xl-3 {
      margin: 1rem !important;
    }

    .m-xl-4 {
      margin: 1.5rem !important;
    }

    .m-xl-5 {
      margin: 3rem !important;
    }

    .m-xl-auto {
      margin: auto !important;
    }

    .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-xl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .my-xl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .my-xl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .my-xl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .my-xl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .my-xl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-xl-0 {
      margin-top: 0 !important;
    }

    .mt-xl-1 {
      margin-top: 0.25rem !important;
    }

    .mt-xl-2 {
      margin-top: 0.5rem !important;
    }

    .mt-xl-3 {
      margin-top: 1rem !important;
    }

    .mt-xl-4 {
      margin-top: 1.5rem !important;
    }

    .mt-xl-5 {
      margin-top: 3rem !important;
    }

    .mt-xl-auto {
      margin-top: auto !important;
    }

    .me-xl-0 {
      margin-right: 0 !important;
    }

    .me-xl-1 {
      margin-right: 0.25rem !important;
    }

    .me-xl-2 {
      margin-right: 0.5rem !important;
    }

    .me-xl-3 {
      margin-right: 1rem !important;
    }

    .me-xl-4 {
      margin-right: 1.5rem !important;
    }

    .me-xl-5 {
      margin-right: 3rem !important;
    }

    .me-xl-auto {
      margin-right: auto !important;
    }

    .mb-xl-0 {
      margin-bottom: 0 !important;
    }

    .mb-xl-1 {
      margin-bottom: 0.25rem !important;
    }

    .mb-xl-2 {
      margin-bottom: 0.5rem !important;
    }

    .mb-xl-3 {
      margin-bottom: 1rem !important;
    }

    .mb-xl-4 {
      margin-bottom: 1.5rem !important;
    }

    .mb-xl-5 {
      margin-bottom: 3rem !important;
    }

    .mb-xl-auto {
      margin-bottom: auto !important;
    }

    .ms-xl-0 {
      margin-left: 0 !important;
    }

    .ms-xl-1 {
      margin-left: 0.25rem !important;
    }

    .ms-xl-2 {
      margin-left: 0.5rem !important;
    }

    .ms-xl-3 {
      margin-left: 1rem !important;
    }

    .ms-xl-4 {
      margin-left: 1.5rem !important;
    }

    .ms-xl-5 {
      margin-left: 3rem !important;
    }

    .ms-xl-auto {
      margin-left: auto !important;
    }

    .p-xl-0 {
      padding: 0 !important;
    }

    .p-xl-1 {
      padding: 0.25rem !important;
    }

    .p-xl-2 {
      padding: 0.5rem !important;
    }

    .p-xl-3 {
      padding: 1rem !important;
    }

    .p-xl-4 {
      padding: 1.5rem !important;
    }

    .p-xl-5 {
      padding: 3rem !important;
    }

    .px-xl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .px-xl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .px-xl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .px-xl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .px-xl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .px-xl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-xl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .py-xl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .py-xl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .py-xl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .py-xl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .py-xl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .pt-xl-0 {
      padding-top: 0 !important;
    }

    .pt-xl-1 {
      padding-top: 0.25rem !important;
    }

    .pt-xl-2 {
      padding-top: 0.5rem !important;
    }

    .pt-xl-3 {
      padding-top: 1rem !important;
    }

    .pt-xl-4 {
      padding-top: 1.5rem !important;
    }

    .pt-xl-5 {
      padding-top: 3rem !important;
    }

    .pe-xl-0 {
      padding-right: 0 !important;
    }

    .pe-xl-1 {
      padding-right: 0.25rem !important;
    }

    .pe-xl-2 {
      padding-right: 0.5rem !important;
    }

    .pe-xl-3 {
      padding-right: 1rem !important;
    }

    .pe-xl-4 {
      padding-right: 1.5rem !important;
    }

    .pe-xl-5 {
      padding-right: 3rem !important;
    }

    .pb-xl-0 {
      padding-bottom: 0 !important;
    }

    .pb-xl-1 {
      padding-bottom: 0.25rem !important;
    }

    .pb-xl-2 {
      padding-bottom: 0.5rem !important;
    }

    .pb-xl-3 {
      padding-bottom: 1rem !important;
    }

    .pb-xl-4 {
      padding-bottom: 1.5rem !important;
    }

    .pb-xl-5 {
      padding-bottom: 3rem !important;
    }

    .ps-xl-0 {
      padding-left: 0 !important;
    }

    .ps-xl-1 {
      padding-left: 0.25rem !important;
    }

    .ps-xl-2 {
      padding-left: 0.5rem !important;
    }

    .ps-xl-3 {
      padding-left: 1rem !important;
    }

    .ps-xl-4 {
      padding-left: 1.5rem !important;
    }

    .ps-xl-5 {
      padding-left: 3rem !important;
    }

    .text-xl-start {
      text-align: left !important;
    }

    .text-xl-end {
      text-align: right !important;
    }

    .text-xl-center {
      text-align: center !important;
    }
  }
  @media (min-width: 1400px) {
    .float-xxl-start {
      float: left !important;
    }

    .float-xxl-end {
      float: right !important;
    }

    .float-xxl-none {
      float: none !important;
    }

    .d-xxl-inline {
      display: inline !important;
    }

    .d-xxl-inline-block {
      display: inline-block !important;
    }

    .d-xxl-block {
      display: block !important;
    }

    .d-xxl-grid {
      display: grid !important;
    }

    .d-xxl-table {
      display: table !important;
    }

    .d-xxl-table-row {
      display: table-row !important;
    }

    .d-xxl-table-cell {
      display: table-cell !important;
    }

    .d-xxl-flex {
      display: flex !important;
    }

    .d-xxl-inline-flex {
      display: inline-flex !important;
    }

    .d-xxl-none {
      display: none !important;
    }

    .flex-xxl-fill {
      flex: 1 1 auto !important;
    }

    .flex-xxl-row {
      flex-direction: row !important;
    }

    .flex-xxl-column {
      flex-direction: column !important;
    }

    .flex-xxl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-xxl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-xxl-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-xxl-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-xxl-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-xxl-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-xxl-wrap {
      flex-wrap: wrap !important;
    }

    .flex-xxl-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .gap-xxl-0 {
      gap: 0 !important;
    }

    .gap-xxl-1 {
      gap: 0.25rem !important;
    }

    .gap-xxl-2 {
      gap: 0.5rem !important;
    }

    .gap-xxl-3 {
      gap: 1rem !important;
    }

    .gap-xxl-4 {
      gap: 1.5rem !important;
    }

    .gap-xxl-5 {
      gap: 3rem !important;
    }

    .justify-content-xxl-start {
      justify-content: flex-start !important;
    }

    .justify-content-xxl-end {
      justify-content: flex-end !important;
    }

    .justify-content-xxl-center {
      justify-content: center !important;
    }

    .justify-content-xxl-between {
      justify-content: space-between !important;
    }

    .justify-content-xxl-around {
      justify-content: space-around !important;
    }

    .justify-content-xxl-evenly {
      justify-content: space-evenly !important;
    }

    .align-items-xxl-start {
      align-items: flex-start !important;
    }

    .align-items-xxl-end {
      align-items: flex-end !important;
    }

    .align-items-xxl-center {
      align-items: center !important;
    }

    .align-items-xxl-baseline {
      align-items: baseline !important;
    }

    .align-items-xxl-stretch {
      align-items: stretch !important;
    }

    .align-content-xxl-start {
      align-content: flex-start !important;
    }

    .align-content-xxl-end {
      align-content: flex-end !important;
    }

    .align-content-xxl-center {
      align-content: center !important;
    }

    .align-content-xxl-between {
      align-content: space-between !important;
    }

    .align-content-xxl-around {
      align-content: space-around !important;
    }

    .align-content-xxl-stretch {
      align-content: stretch !important;
    }

    .align-self-xxl-auto {
      align-self: auto !important;
    }

    .align-self-xxl-start {
      align-self: flex-start !important;
    }

    .align-self-xxl-end {
      align-self: flex-end !important;
    }

    .align-self-xxl-center {
      align-self: center !important;
    }

    .align-self-xxl-baseline {
      align-self: baseline !important;
    }

    .align-self-xxl-stretch {
      align-self: stretch !important;
    }

    .order-xxl-first {
      order: -1 !important;
    }

    .order-xxl-0 {
      order: 0 !important;
    }

    .order-xxl-1 {
      order: 1 !important;
    }

    .order-xxl-2 {
      order: 2 !important;
    }

    .order-xxl-3 {
      order: 3 !important;
    }

    .order-xxl-4 {
      order: 4 !important;
    }

    .order-xxl-5 {
      order: 5 !important;
    }

    .order-xxl-last {
      order: 6 !important;
    }

    .m-xxl-0 {
      margin: 0 !important;
    }

    .m-xxl-1 {
      margin: 0.25rem !important;
    }

    .m-xxl-2 {
      margin: 0.5rem !important;
    }

    .m-xxl-3 {
      margin: 1rem !important;
    }

    .m-xxl-4 {
      margin: 1.5rem !important;
    }

    .m-xxl-5 {
      margin: 3rem !important;
    }

    .m-xxl-auto {
      margin: auto !important;
    }

    .mx-xxl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .mx-xxl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .mx-xxl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .mx-xxl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .mx-xxl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .mx-xxl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .mx-xxl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-xxl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .my-xxl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .my-xxl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .my-xxl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .my-xxl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .my-xxl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .my-xxl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-xxl-0 {
      margin-top: 0 !important;
    }

    .mt-xxl-1 {
      margin-top: 0.25rem !important;
    }

    .mt-xxl-2 {
      margin-top: 0.5rem !important;
    }

    .mt-xxl-3 {
      margin-top: 1rem !important;
    }

    .mt-xxl-4 {
      margin-top: 1.5rem !important;
    }

    .mt-xxl-5 {
      margin-top: 3rem !important;
    }

    .mt-xxl-auto {
      margin-top: auto !important;
    }

    .me-xxl-0 {
      margin-right: 0 !important;
    }

    .me-xxl-1 {
      margin-right: 0.25rem !important;
    }

    .me-xxl-2 {
      margin-right: 0.5rem !important;
    }

    .me-xxl-3 {
      margin-right: 1rem !important;
    }

    .me-xxl-4 {
      margin-right: 1.5rem !important;
    }

    .me-xxl-5 {
      margin-right: 3rem !important;
    }

    .me-xxl-auto {
      margin-right: auto !important;
    }

    .mb-xxl-0 {
      margin-bottom: 0 !important;
    }

    .mb-xxl-1 {
      margin-bottom: 0.25rem !important;
    }

    .mb-xxl-2 {
      margin-bottom: 0.5rem !important;
    }

    .mb-xxl-3 {
      margin-bottom: 1rem !important;
    }

    .mb-xxl-4 {
      margin-bottom: 1.5rem !important;
    }

    .mb-xxl-5 {
      margin-bottom: 3rem !important;
    }

    .mb-xxl-auto {
      margin-bottom: auto !important;
    }

    .ms-xxl-0 {
      margin-left: 0 !important;
    }

    .ms-xxl-1 {
      margin-left: 0.25rem !important;
    }

    .ms-xxl-2 {
      margin-left: 0.5rem !important;
    }

    .ms-xxl-3 {
      margin-left: 1rem !important;
    }

    .ms-xxl-4 {
      margin-left: 1.5rem !important;
    }

    .ms-xxl-5 {
      margin-left: 3rem !important;
    }

    .ms-xxl-auto {
      margin-left: auto !important;
    }

    .p-xxl-0 {
      padding: 0 !important;
    }

    .p-xxl-1 {
      padding: 0.25rem !important;
    }

    .p-xxl-2 {
      padding: 0.5rem !important;
    }

    .p-xxl-3 {
      padding: 1rem !important;
    }

    .p-xxl-4 {
      padding: 1.5rem !important;
    }

    .p-xxl-5 {
      padding: 3rem !important;
    }

    .px-xxl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .px-xxl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .px-xxl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .px-xxl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .px-xxl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .px-xxl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-xxl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .py-xxl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .py-xxl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .py-xxl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .py-xxl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .py-xxl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .pt-xxl-0 {
      padding-top: 0 !important;
    }

    .pt-xxl-1 {
      padding-top: 0.25rem !important;
    }

    .pt-xxl-2 {
      padding-top: 0.5rem !important;
    }

    .pt-xxl-3 {
      padding-top: 1rem !important;
    }

    .pt-xxl-4 {
      padding-top: 1.5rem !important;
    }

    .pt-xxl-5 {
      padding-top: 3rem !important;
    }

    .pe-xxl-0 {
      padding-right: 0 !important;
    }

    .pe-xxl-1 {
      padding-right: 0.25rem !important;
    }

    .pe-xxl-2 {
      padding-right: 0.5rem !important;
    }

    .pe-xxl-3 {
      padding-right: 1rem !important;
    }

    .pe-xxl-4 {
      padding-right: 1.5rem !important;
    }

    .pe-xxl-5 {
      padding-right: 3rem !important;
    }

    .pb-xxl-0 {
      padding-bottom: 0 !important;
    }

    .pb-xxl-1 {
      padding-bottom: 0.25rem !important;
    }

    .pb-xxl-2 {
      padding-bottom: 0.5rem !important;
    }

    .pb-xxl-3 {
      padding-bottom: 1rem !important;
    }

    .pb-xxl-4 {
      padding-bottom: 1.5rem !important;
    }

    .pb-xxl-5 {
      padding-bottom: 3rem !important;
    }

    .ps-xxl-0 {
      padding-left: 0 !important;
    }

    .ps-xxl-1 {
      padding-left: 0.25rem !important;
    }

    .ps-xxl-2 {
      padding-left: 0.5rem !important;
    }

    .ps-xxl-3 {
      padding-left: 1rem !important;
    }

    .ps-xxl-4 {
      padding-left: 1.5rem !important;
    }

    .ps-xxl-5 {
      padding-left: 3rem !important;
    }

    .text-xxl-start {
      text-align: left !important;
    }

    .text-xxl-end {
      text-align: right !important;
    }

    .text-xxl-center {
      text-align: center !important;
    }
  }
  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 2.5rem !important;
    }

    .fs-2 {
      font-size: 2rem !important;
    }

    .fs-3 {
      font-size: 1.75rem !important;
    }

    .fs-4 {
      font-size: 1.5rem !important;
    }
  }
  @media print {
    .d-print-inline {
      display: inline !important;
    }

    .d-print-inline-block {
      display: inline-block !important;
    }

    .d-print-block {
      display: block !important;
    }

    .d-print-grid {
      display: grid !important;
    }

    .d-print-table {
      display: table !important;
    }

    .d-print-table-row {
      display: table-row !important;
    }

    .d-print-table-cell {
      display: table-cell !important;
    }

    .d-print-flex {
      display: flex !important;
    }

    .d-print-inline-flex {
      display: inline-flex !important;
    }

    .d-print-none {
      display: none !important;
    }
  }
  html {
    scroll-padding-top: 4.5rem;
  }

  .bg-black {
    background-color: #000 !important;
  }

  .bg-color {
    background: #d40054;
  }

  .font-alt {
    font-family: 'Kanit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji' !important;
  }

  aside,
  section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .app-badge {
    height: 3rem;
  }

  #mainNav {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #fff;
  }
  #mainNav .navbar-brand {
    font-family: 'Kanit', -apple-system;
  }
  #mainNav .navbar-brand:hover,
  #mainNav .navbar-brand:active {
    color: #2937f0;
  }
  #mainNav .navbar-toggler {
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    color: #212529;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
    color: #212529;
  }
  #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #6c757d;
  }

  section.cta {
    position: relative;
    padding: 15rem 0;
    background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    background-position: center;
    background-size: cover;
  }
  section.cta .cta-content {
    position: relative;
    z-index: 1;
  }
  section.cta:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .icon-feature {
    font-size: 4rem;
  }

  footer a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
  }
  footer a:hover,
  footer a:active,
  footer a:focus {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: underline;
  }

  .masthead {
    background-color: #f8f9fa;
    padding-top: 9.5rem;
    padding-bottom: 5rem;
  }
  .masthead .masthead-device-mockup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .coracao {
    width: 80%;
  }

  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 10rem;
  }
  @media (min-width: 576px) {
    .masthead .masthead-device-mockup .circle {
      width: 70%;
      display: block;
    }
    .masthead .masthead-device-mockup .device-wrapper {
      max-width: 12.5rem;
    }
  }
  @media (min-width: 768px) {
    .masthead .masthead-device-mockup .circle {
      width: 60%;
    }
    .masthead .masthead-device-mockup .device-wrapper {
      max-width: 15rem;
    }
  }
  @media (min-width: 992px) {
    .masthead .masthead-device-mockup .circle {
      width: 90%;
    }
    .masthead .masthead-device-mockup .device-wrapper {
      max-width: 15rem;
    }
  }
  @media (min-width: 1200px) {
    .masthead .masthead-device-mockup .circle {
      width: 75%;
    }
    .masthead .masthead-device-mockup .device-wrapper {
      max-width: 15rem;
    }
  }
  @media (min-width: 1400px) {
    .masthead .masthead-device-mockup .circle {
      width: 70%;
    }
    .masthead .masthead-device-mockup .device-wrapper {
      max-width: 17rem;
    }
  }
`;
