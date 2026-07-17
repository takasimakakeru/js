'use client'; // ブラウザ側で動かすために必須です

import { useState } from 'react';

function Page() {
  // 電卓の画面に表示する文字列を管理する状態（State）
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <title>四則演算電卓アプリ</title>
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-2">四則演算電卓アプリ</h1>
        
        <div className="bg-slate-50 rounded-lg p-3 mb-6 text-xs text-slate-600 space-y-1 border border-slate-200">
          <p><strong>概要</strong>: 加算、減算、乗算、除算を行うことができます。</p>
          <p><strong>使い方</strong>: 数字を入力し、演算子を選択して計算ボタンを押してください。</p>
          <p><strong>例</strong>: 5 + 3 = 8</p>
          <p className="text-amber-600 font-medium">※注意: 除算の際に0で割ることはできません。</p>
        </div>
        
        {/* ディスプレイ */}
        <input 
          type="text" 
          id="display" 
          value={displayValue} 
          readOnly 
          className="w-full mb-4 px-4 py-3 text-right text-2xl font-mono bg-slate-900 text-emerald-400 rounded-lg border-2 border-slate-700 shadow-inner focus:outline-none"
        />
        
        {/* ボタン配置グリッド */}
        <div className="grid grid-cols-4 gap-3">
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="1">1</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="2">2</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="3">3</button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="+">+</button>
          
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="4">4</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="5">5</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="6">6</button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="-">-</button>
          
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="7">7</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="8">8</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="9">9</button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="*">*</button>
          
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="0">0</button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value=".">.</button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="/">/</button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg text-xl transition-colors shadow-sm" data-value="=">=</button>
        </div>
      </div>
    </div>
  );
}

export default Page;