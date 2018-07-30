import gql from "graphql-tag";

const getAssetsQuery = (assetName) => {
    return gql`
query {
    allPositions {
    x
    y
    z
  }
  obj: allPhysicalAssets(filter:{name_contains:"${assetName}"}){
    name
    objPath
    scale
  }
  mtl: allPhysicalAssets(filter:{name_contains:"${assetName}"}){
    name
    mtlPath
    scale
}
}
`}

export default getAssetsQuery