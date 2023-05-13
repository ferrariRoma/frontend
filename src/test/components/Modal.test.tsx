import { render, screen } from "@testing-library/react"
import {Modal, SettingModal} from '../../components'
import React from "react"

describe('Modal', ()=>{
  describe('title과 children을 넘겨주면', ()=>{
    it('title과 기본 버튼을 렌더링 해줘야 합니다.', ()=>{
      const {container} = render(<Modal title='설정'><SettingModal /></Modal>)
      
      expect(container).toContainElement(screen.getByText('설정'));
    })
  })
})