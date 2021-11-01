import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
	return (
		<Container>
			<Section
				title='Model S'
				description='Order Online for Touchless delivery'
				backgroundImg='model-s.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model Y'
				description='Order Online for Touchless delivery'
				backgroundImg='model-y.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model 3'
				description='Order Online for Touchless delivery'
				backgroundImg='model-3.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model X'
				description='Order Online for Touchless delivery'
				backgroundImg='model-x.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Lowest Cost Solar Panels in America'
				description='Money-back guarantee'
				backgroundImg='solar-panel.jpg'
				leftBtnText='Order now'
				rightBtnText='Learn more'
			/>
			<Section
				title='Solar for New Roofs'
				description='Solar Roof Cost Less Than a New Roof'
				backgroundImg='solar-panel.jpg'
				leftBtnText='Order now'
				rightBtnText='Learn more'
			/>
			<Section
				title='Accessories'
				description='Solar Roof Cost Less Than a New Roof'
				backgroundImg='accessories.jpg'
				leftBtnText='Shop now'
			/>
		</Container>
	)
}

export default Home

const Container = styled.div`
	height: 100vh;
`
