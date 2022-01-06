import React, { useCallback, memo, useRef, useState } from "react";
import { FlatList, View,Image, Dimensions} from "react-native";
import styles from '../styles/carouselStyle'
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = [
    {
        id: "0",
        image: require('../img/0.jpg')
    },
    {
        id: "1",
        image: require('../img/1.jpg')
    },
    {
        id: "2",
        image: require('../img/2.jpg')
    }
]

const Slide = memo(function Slide({ data }) {
    return (
        <View style={styles.slide}>
            <Image source={data.image} style={styles.slideImage}></Image>
        </View>
    );
});

function Pagination({ index }) {
    return (
        <View style={styles.pagination}>
            {slideList.map((_, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.paginationDot,
                            index === i
                                ? styles.paginationDotActive
                                : styles.paginationDotInactive,
                        ]}
                    />
                );
            })}
        </View>
    );
}

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;
        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;
    }, []);

    return (
        <>
            <FlatList
                data={slideList}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            <Pagination index={index}></Pagination>
        </>
    );
}
