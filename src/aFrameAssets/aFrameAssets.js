// * Register all assets here 
// * If this were typescript, we'd also export a type variable with each asset's name

import React, { Component } from "react";
import * as aframe from "aframe";

const assets = () => {

    return (<a-assets>
        <a-image
            id="sky"
            src="https://uploads.codesandbox.io/uploads/user/cf641f2b-3840-4f83-bf5e-dee7737a7432/EB1V-holodeck.png"
        />

        <a-asset-item
            id="vessel-obj"
            src="https://raw.githubusercontent.com/roieki/SceneBuilder/5e3b9993e5a9af95316a2716f9da92fd9f54863f/public/enterprise/enterprise1701d.obj"
        />
        <a-asset-item
            id="vessel-mtl"
            src="https://raw.githubusercontent.com/roieki/SceneBuilder/master/public/enterprise/enterprise1701d.mtl"
        />
        <a-asset-item
            id="container-mtl"
            src="https://raw.githubusercontent.com/llanginger/SceneBuilder/uploading-container/public/container/Cargo_container_02.mtl"
        />
        <a-asset-item
            id="container-obj"
            src="https://raw.githubusercontent.com/llanginger/SceneBuilder/uploading-container/public/container/Cargo_container_02.obj"
        />

        <a-asset-item
            id="dawningFont"
            src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2FdawningOfANewDayRegular.typeface.json?1490305922844"
        />
        <a-asset-item
            id="exoFont"
            src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2Black.typeface.json?1490305922150"
        />
        <a-asset-item
            id="exoItalicFont"
            src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2BlackItalic.typeface.json?1490305922725"
        />

        <a-asset-item
            id="optimerBoldFont"
            src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"
        />

        <a-mixin id="cube" geometry="primitive: box" />
        <a-mixin id="cube-hovered" material="color: magenta" />
        <a-mixin id="cube-selected" material="color: cyan" />
        <a-mixin id="red" material="color: red" />
        <a-mixin id="green" material="color: green" />
        <a-mixin id="blue" material="color: blue" />
        <a-mixin id="yellow" material="color: yellow" />
        <a-mixin id="sphere" geometry="primitive: sphere" />
    </a-assets>)
}



export default assets