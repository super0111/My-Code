import { Link } from "react-router-dom"
import { Box, Button } from "@mui/material"
import { palette } from "../themes"
import { useState } from "react"

const navItems  = [
  { name: 'Prediction', to: 'prediction' },
  { name: 'Lottery', to: 'lottery' },
  { name: 'Prettery', to: 'pottery' },
]

export const MinNavbar = () => {
  const [ selectedItem, setSelectedItem ] = useState(0)

  return (
    <Box sx={{
      background: '#1d1d22',
    }}>
      <Box display='flex' justifyContent='center' alignItems='center' sx={{
      }}>
        {navItems.map((item, i) => (
          <Button key={i} 
            onClick={() => setSelectedItem(i)}
            sx={{
              padding: '12px 12px !important',
              margin: '0 8px',
              borderBottom: selectedItem === i ? '3px solid #1fc7d4' : '',
              '&:hover': {
                background: '#353547',
              }
            }}
          >
            <Link
              to={`/win/${item.to}`}
              style={{
                color: selectedItem === i ? '#9a6aff' : palette.text.primary,
                textDecoration: 'none',
                textTransform: 'initial',
              }}
            >
              {item.name}
            </Link>
          </Button>
        ))}
      </Box>
    </Box>
  )
}