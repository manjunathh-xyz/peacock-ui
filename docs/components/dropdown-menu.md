# Dropdown Menu

A robust, glassmorphic dropdown menu system built on top of Radix UI primitives.

## Preview

<DropdownMenuDemo />

## Usage

```tsx
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuShortcut,
  PeacockButton
} from '@peacock-ui/core'

function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <PeacockButton variant="glass">Open Menu</PeacockButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Anatomy

- **DropdownMenu**: The root component.
- **DropdownMenuTrigger**: The element that opens the menu.
- **DropdownMenuContent**: The container for menu items.
- **DropdownMenuItem**: Individual menu items.
- **DropdownMenuLabel**: Section labels.
- **DropdownMenuSeparator**: Visual dividers.
- **DropdownMenuShortcut**: Keyboard shortcut hints.
