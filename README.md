# React Material Flexbox

React Material Flexbox is a flexbox component built using the standards established by the [Angular Material](https://material.angularjs.org/latest/layout/introduction) team. The sass is borrowed and manipulated from thier source. These rules follow the guidelines set by [Material Design](https://material.google.com/layout/responsive-ui.html#).

## Installation

React Material Flexbox can be install as an [npm package](https://www.npmjs.com/package/react-material-flexbox)

```
npm install --save react-material-flexbox
```

## Requirements

- React
- css-loader

## Usage

```
import Flexbox from 'react-material-flexbox'

<Flexbox layout='row' align='center center'>
	{ content }
</Flexbox>
```

## Props

**layout** - string (row or column), specifies the flex direction for the component

```
layout='row'
```

**flex**   - number, specifies the flex sizing for the component 

```
flex="100"
```

**align**  - string (align-item, justify-content), specifies the alignment and justificaiton of the component

```
align="center center"
```

For mobile / responsive specific styles, append the follow breakpoints to the prop

- xs
- sm
- md
- lg

```
layout-sm="column"
```