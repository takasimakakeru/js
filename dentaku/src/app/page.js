'use client'; // ブラウザ側で動かすために必須です

import { useState } from 'react';

function Page() {
  // 電卓の画面に表示する文字列を管理する状態（State）
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div>
      <title>四則演算電卓アプリ</title>
      <h1>四則演算電卓アプリ</h1>
      <p>このアプリは、四則演算（加算、減算、乗算、除算）を行うことができます。</p>
      <p>使い方: 数字を入力し、演算子を選択して計算ボタンを押してください。</p>
      <p>例: 5 + 3 = 8</p>
      <p>注意: 除算の際に0で割ることはできません。</p>
      
      {/* readonly は readOnly に修正 */}
      <input type="text" id="display" value={displayValue} readOnly />
      
      {/* date-value は data-value に修正 */}
      <button className="btn btn-primary" data-value="1">1</button>
      <button className="btn btn-primary" data-value="2">2</button>
      <button className="btn btn-primary" data-value="3">3</button>
      <button className="btn btn-primary" data-value="+">+</button>
      <br />
      <button className="btn btn-primary" data-value="4">4</button>
      <button className="btn btn-primary" data-value="5">5</button>
      <button className="btn btn-primary" data-value="6">6</button>
      <button className="btn btn-primary" data-value="-">-</button>
      <br />
      <button className="btn btn-primary" data-value="7">7</button>
      <button className="btn btn-primary" data-value="8">8</button>
      <button className="btn btn-primary" data-value="9">9</button>
      <button className="btn btn-primary" data-value="*">*</button>
      <br />
      <button className="btn btn-primary" data-value="0">0</button>
      <button className="btn btn-primary" data-value=".">.</button>
      <button className="btn btn-primary" data-value="/">/</button>
      <button className="btn btn-primary" data-value="=">=</button>
    </div>
  );
}

export default Page;