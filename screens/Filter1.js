import React from "react";
import { View, Image } from "react-native";

const Filter1 = (
        {
            face: {
                bounds: {
                    size: {width: faceWidth, height: faceHeight}
                },
                leftEyePosition,
                rightEyePosition,
                noseBasePosition
            }
        }
    ) => {
        const filterWidth = faceWidth;
        const filterHeight = faceHeight;

        const transformAngle = (
            angleRad = Math.atan(
                (rightEyePosition.y - leftEyePosition.y) /
                (rightEyePosition.x - leftEyePosition.x)
            )
        ) => (angleRad*180)/Math.PI
        return(
            <View
                style={{
                    position: "absolute",
                    left: leftEyePosition.x - filterWidth * 0.46,
                    right: rightEyePosition.x - filterWidth * 0.15,
                    top: noseBasePosition.y - filterHeight * 1.5
                }}
            >
                <Image
                    source={require('../assets/crown-pic1.png')}
                    style={{
                        width: filterWidth,
                        height: filterHeight,
                        resizeMode: "contain",
                        transform: [{rotate: `${transformAngle()}deg`}]
                    }}
                />
            </View>
        )
}

export default Filter1
