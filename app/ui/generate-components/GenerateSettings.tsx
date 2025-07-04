// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react'
import { IconButton, Typography, Box, Menu, MenuItem, Avatar } from '@mui/material'
import { CustomizedAvatarButton, CustomizedIconButton, CustomizedIconButtonOpen } from '../ux-components/Button-SX'

import theme from '../../theme'
const { palette } = theme

import FormInputDropdown from '../ux-components/InputDropdown'
import FormInputChipGroup from '../ux-components/InputChipGroup'
import { GenerateSettingsI } from '../ux-components/InputInterface'
import { FormInputTextSmall } from '../ux-components/InputTextSmall'
import { Settings } from '@mui/icons-material'
import CustomTooltip from '../ux-components/Tooltip'

const CustomizedMenu = {
  '& .MuiPaper-root': {
    background: 'white',
    color: palette.text.primary,
    boxShadow: 5,
    p: 0.5,
    width: 280,
    '& .MuiMenuItem-root': {
      background: 'transparent',
      pb: 1,
    },
  },
}

export default function GenerateSettings({
  control,
  setValue,
  generalSettingsFields,
  advancedSettingsFields,
  warningMessage,
}: GenerateSettingsI) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <CustomTooltip title="Open settings" size="small">
        <IconButton onClick={handleClick} disableRipple sx={{ px: 0.5 }}>
          <Avatar sx={{ ...CustomizedAvatarButton, ...(open === true && CustomizedIconButtonOpen) }}>
            <Settings
              sx={{
                ...CustomizedIconButton,
                ...(open === true && CustomizedIconButtonOpen),
              }}
            />
          </Avatar>
        </IconButton>
      </CustomTooltip>
        
    </>
  )
}
