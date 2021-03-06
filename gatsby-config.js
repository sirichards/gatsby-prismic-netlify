module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: "gatsby-source-prismic",
			options: {
				// The name of your prismic.io repository. This is required.
				// Example: 'gatsby-source-prismic-test-site' if your prismic.io address
				// is 'gatsby-source-prismic-test-site.prismic.io'.
				repositoryName: "dewynters",

				// An API access token to your prismic.io repository. This is required.
				// You can generate an access token in the "API & Security" section of
				// your repository settings. Setting a "Callback URL" is not necessary.
				// The token will be listed under "Permanent access tokens".
				accessToken: "MC5XN1Noa0JRQUFDb0FiLWYw.A--_vRLvv70n77-977-9D--_vQPvv70bCRZE77-977-977-9U0_vv73vv71vNO-_ve-_ve-_vRHvv73vv73vv73vv70",

				// Set a link resolver function used to process links in your content.
				// Fields with rich text formatting or links to internal content use this
				// function to generate the correct link URL.
				// The document node, field key (i.e. API ID), and field value are
				// provided to the function, as seen below. This allows you to use
				// different link resolver logic for each field if necessary.
				// See: https://prismic.io/docs/javascript/query-the-api/link-resolving
				linkResolver: ({ node, key, value }) => doc => {
					// Your link resolver
				},

				// Set a list of links to fetch and be made available in your link
				// resolver function.
				// See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
				fetchLinks: [
					// Your list of links
				],

				// Set an HTML serializer function used to process formatted content.
				// Fields with rich text formatting use this function to generate the
				// correct HTML.
				// The document node, field key (i.e. API ID), and field value are
				// provided to the function, as seen below. This allows you to use
				// different HTML serializer logic for each field if necessary.
				// See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
				htmlSerializer: ({ node, key, value }) => (
					(type, element, content, children) => {
						// Your HTML serializer
					}
				),
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
	],
}
