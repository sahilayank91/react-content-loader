import React from "react"
import renderer from "react-test-renderer"

import FacebookStyle from "../../stylized/FacebookStyle"

describe("FacebookStyle", () => {
  const wrapper = renderer.create(
    <FacebookStyle uniquekey="FacebookStyle" speed={20} />
  )

  test("renders correctly", () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("props are propagated ", () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.uniquekey).toEqual("FacebookStyle")
  })
})
