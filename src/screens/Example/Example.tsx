import { View } from 'react-native';
import Video from 'react-native-video';
import { FlashList } from '@shopify/flash-list';

import { SafeScreen } from '@/components/template';
import { styles } from './styles';

const videoData = [
	{
		id: 1,
		uri: 'https://api.tfarraj.tv/api/v1/videos/64a1fa034bb997bdf598ef77/video',
	},
	{
		id: 2,
		uri: 'https://api.tfarraj.tv/api/v1/videos/64a1fee44bb997bdf5991442/video',
	},
	{
		id: 3,
		uri: 'https://api.tfarraj.tv/api/v1/videos/64a80dcf4bb997bdf59f34e2/video',
	},
	{
		id: 4,
		uri: 'https://api.tfarraj.tv/api/v1/videos/63f3daf03e12167f51c8fd7c/video',
	},
];

const duplicatedVideoData: Array<{ id: number; uri: string }> = [];
for (let i = 0; i < 5; i += 1) {
	duplicatedVideoData.push(...videoData);
}

function Example() {
	type VideoItemProps = {
		uri: string;
	};

	function VideoItem({ uri }: VideoItemProps) {
		return (
			<View style={styles.videoContainer}>
				<Video
					source={{ uri }}
					style={styles.video}
					resizeMode="cover"
					repeat
					preload="auto"
				/>
			</View>
		);
	}

	return (
		<SafeScreen>
			<FlashList
				data={duplicatedVideoData}
				renderItem={({ item }) => <VideoItem uri={item.uri} />}
				keyExtractor={(item, index) => `${item.id}-${index}`}
				estimatedItemSize={300}
			/>
		</SafeScreen>
	);
}

export default Example;
