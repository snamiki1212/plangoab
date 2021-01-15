// React と React Testing Library を読み込みます
import React from 'react'
import About from './index'
import { cleanup, render } from '@testing-library/react'

// 各テスト実行後にレンダーしたコンポーネントをアンマウントする
afterEach(cleanup)

it('XXX', () => {
  render(<About />)
  // expect(screen.findByText(/XXX/i)).toBe('XXX')
})

it('About ページコンポーネントが存在している', () => {
  expect(About).toBeTruthy()
})
