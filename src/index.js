import React, { useRef, useState, useEffect } from 'react'
import PickerContextWrapper from './context'
import Picker from './components/Picker'

export * from './hooks/useColorPicker'

function ColorPicker({
  value = 'rgba(175, 51, 242, 1)',
  onChange = () => {},
  hideControls = false,
  hideInputs = false,
  hideOpacity = false,
  hidePresets = false,
  hideHue = false,
  presets = [],
  hideEyeDrop = false,
  hideAdvancedSliders = false,
  hideColorGuide = false,
  hideInputType = false,
  width = 294,
  height = 294,
  style = {},
  className,
}) {
  const contRef = useRef(null)
  const [bounds, setBounds] = useState({})

  useEffect(() => {
    setBounds(contRef?.current?.getBoundingClientRect())
  }, [])

  return (
    <div ref={contRef} style={{ ...style, width: width }} className={className}>
      <PickerContextWrapper
        bounds={bounds}
        value={value}
        onChange={onChange}
        squareSize={width}
        squareHeight={height}
      >
        <Picker
          hideControls={hideControls}
          hideInputs={hideInputs}
          hidePresets={hidePresets}
          hideOpacity={hideOpacity}
          hideHue={hideHue}
          presets={presets}
          hideEyeDrop={hideEyeDrop}
          hideAdvancedSliders={hideAdvancedSliders}
          hideColorGuide={hideColorGuide}
          hideInputType={hideInputType}
        />
      </PickerContextWrapper>
    </div>
  )
}

export default ColorPicker
