// React と React Testing Library を読み込みます
import React from 'react'
import Home from 'pages/index'
import { cleanup, render, screen } from '@testing-library/react'

// 各テスト実行後にレンダーしたコンポーネントをアンマウントする
afterEach(cleanup)

it('「Next.js!」のリンクが Next.js の公式サイトのトップページである', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!').getAttribute('href')).toBe(
    'https://nextjs.org'
  )
})

it('Home ページコンポーネントが存在している', () => {
  expect(Home).toBeTruthy()
})
