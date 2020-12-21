### Coffee info sheet

This project is small informational site about all aspects of coffee.

The public graphql endpoint can be found here:

```
https://ynp348yw.api.sanity.io/v1/graphql/production/default
```

To see all page data, paste this into the left column of the Graphql playground:

```
{
  allPage {
    title
    body
  }
}
```
