describe('<CloneMe/>', () => {
  it('shold render', () => {
    renderTheme(<CloneMe />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
