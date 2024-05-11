const clickHandler = (setTheme: any, theme: any) => {
  return (event: React.MouseEvent) => {
    setTheme(!theme)
    event.preventDefault();
  }
}
