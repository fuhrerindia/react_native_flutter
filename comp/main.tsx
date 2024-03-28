import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, StatusBar } from 'react-native';

export enum MainAxisAlignment {
    center = "center",
    spaceBetween = "space-between",
    spaceAround = "space-around",
    spaceEvenly = "space-evenly",
    start = "flex-start",
    end = "flex-end",
};
export enum CrossAxisAlignment {
    center = "center",
    spaceBetween = "space-between",
    spaceAround = "space-around",
    start = "flex-start",
    end = "flex-end",
    stretch = "stretch"
}
export const Row = ({ children, mainAxisAlignment, crossAxisAlignment, height }: {
    children: React.ReactNode,
    height?: any,
    mainAxisAlignment?: MainAxisAlignment,
    crossAxisAlignment?: CrossAxisAlignment
}) => {
    const styling = StyleSheet.create({
        view: {
            flexDirection: "row",
            justifyContent: mainAxisAlignment || MainAxisAlignment.spaceEvenly,
            alignContent: crossAxisAlignment || CrossAxisAlignment.center,
            width: "100%",
            height: height,
        },
    });
    return (
        <View style={styling.view}>
            {children}
        </View>
    );
}

export const Column = ({ children, mainAxisAlignment, crossAxisAlignment, height }: {
    children: React.ReactNode,
    height?: any,
    mainAxisAlignment?: MainAxisAlignment,
    crossAxisAlignment?: CrossAxisAlignment
}) => {
    const styling = StyleSheet.create({
        view: {
            flexDirection: "column",
            justifyContent: mainAxisAlignment || MainAxisAlignment.spaceBetween,
            alignContent: crossAxisAlignment || CrossAxisAlignment.start,
            width: "100%",
            height: height,
        },
    });
    return (
        <View style={styling.view}>
            {children}
        </View>
    );
}

export interface BoxDecoration {
    color?: string;
    width?: any;
    height?: number;
    borderRadius?: number;
    marginHorizontal?: number;
    paddingHorizontal?: number;
    marginVertical?: number;
    paddingVertical?: number;
    margin?: number;
    padding?: number;
    marginTop?: number;
    paddingTop?: number;
    marginRight?: number;
    paddingRight?: number;
    marginBottom?: number;
    paddingBottom?: number;
    marginLeft?: number;
    paddingLeft?: number;
    marginFromLTRB?: [number, number, number, number];
    paddingFromLTRB?: [number, number, number, number];
}

function decorationToStyle(props: BoxDecoration): object {
    if (props.marginFromLTRB && (props.margin || props.marginBottom || props.marginHorizontal || props.marginLeft || props.marginRight || props.marginTop || props.marginVertical)) {
        throw new Error("TypeError: Can not set any other margin property when marginFrtomLTRB is set.");
    }
    if (props.paddingFromLTRB && (props.padding || props.paddingBottom || props.paddingHorizontal || props.paddingLeft || props.paddingRight || props.paddingTop || props.paddingVertical)) {
        throw new Error("TypeError: Can not set any other padding property when paddingFrtomLTRB is set.");
    }
    return {
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        borderRadius: props.height,

        marginHorizontal: props.marginFromLTRB === undefined ? props.marginHorizontal : undefined,
        paddingHorizontal: props.paddingFromLTRB === undefined ? props.paddingHorizontal : undefined,
        marginVertical: props.marginFromLTRB === undefined ? props.marginVertical : undefined,
        paddingVertical: props.paddingFromLTRB === undefined ? props.paddingVertical : undefined,
        margin: props.marginFromLTRB === undefined ? props.margin : undefined,
        padding: props.paddingFromLTRB === undefined ? props.padding : undefined,
        marginTop: props.marginFromLTRB === undefined ? props.marginTop : props.marginFromLTRB[1],
        paddingTop: props.paddingFromLTRB === undefined ? props.paddingTop : props.paddingFromLTRB[1],
        marginRight: props.marginFromLTRB === undefined ? props.marginRight : props.marginFromLTRB[2],
        paddingRight: props.paddingFromLTRB === undefined ? props.paddingRight : props.paddingFromLTRB[2],
        marginBottom: props.marginFromLTRB === undefined ? props.marginBottom : props.marginFromLTRB[3],
        paddingBottom: props.paddingFromLTRB === undefined ? props.paddingBottom : props.paddingFromLTRB[3],
        marginLeft: props.marginFromLTRB === undefined ? props.marginLeft : props.marginFromLTRB[0],
        paddingLeft: props.paddingFromLTRB === undefined ? props.paddingLeft : props.paddingFromLTRB[0],

    };
}

export const Container = ({ children, decoration }: {
    children: React.ReactNode,
    decoration: BoxDecoration,
}) => {
    const boxStyle = decorationToStyle(decoration);
    return (
        <View style={boxStyle}>
            {children}
        </View>
    );
}

export const SiedBox = ({ width, height }: { width: number, height: number }) => {
    const boxStyle = { width, height };
    return (
        <View style={boxStyle}></View>
    );
};

export const TextBox = ({ leading, trailing, hint, decoration }: {
    leading?: React.ReactNode,
    trailing?: React.ReactNode,
    hint: string,
    decoration?: BoxDecoration,
}) => {
    return (
        <Container decoration={decoration || {}}>
            <Row mainAxisAlignment={MainAxisAlignment.spaceBetween} crossAxisAlignment={CrossAxisAlignment.center}>
                {leading}
                <TextInput placeholder={hint} />
                {trailing}
            </Row>
        </Container>
    );
}

export const Scaffold = ({ scrollable, children, hiddenStatusBar, statusBarColor }: { 
    children: React.ReactNode,
    scrollable?: boolean,
    hiddenStatusBar?: boolean,
    statusBarColor?: string,
}) => {
    const BodyComp = () => (
        <>
            <StatusBar hidden={hiddenStatusBar} backgroundColor={statusBarColor} />
            {children}
        </>
    );
    return scrollable ? (
        <ScrollView>
            <BodyComp />
        </ScrollView>
    ) : (
        <BodyComp />
    );
}