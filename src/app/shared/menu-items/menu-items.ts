import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'table', name: 'รายการพัสดุ', type: 'link', icon: 'view_list' },
  { state: 'durable', name: 'รายการครุภัณฑ์', type: 'link', icon: 'view_list' },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  {
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center'
  },
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
];

const MENUUSER = [
  { state: 'supplie', name: 'รายการพัสดุ', type: 'link', icon: 'view_list' },
  { state: 'durable', name: 'รายการครุภัณฑ์', type: 'link', icon: 'view_list' },
  { state: 'reveal', type: 'link', name: 'เบิกพัสดุ', icon: 'wysiwyg' },
  { state: 'bor-durable', type: 'link', name: 'ยืมครุภัณฑ์', icon: 'wysiwyg' },
  { state: 'from', type: 'link', name: 'แบบสำรวจ', icon: 'view_list' },
  { state: 'userlist', type: 'link', name: 'สมาชิก', icon: 'view_headline' }
]

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUUSER;
  }
}

export class MenuUser {
  getMenuitem(): Menu[] {
    return MENUUSER;
  }
}
