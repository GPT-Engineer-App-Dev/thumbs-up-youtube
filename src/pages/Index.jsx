import { Container, VStack, Image, SimpleGrid, Box, Text } from "@chakra-ui/react";

const thumbnails = [
  { id: 1, title: "Video 1", src: "https://via.placeholder.com/150" },
  { id: 2, title: "Video 2", src: "https://via.placeholder.com/150" },
  { id: 3, title: "Video 3", src: "https://via.placeholder.com/150" },
  { id: 4, title: "Video 4", src: "https://via.placeholder.com/150" },
  { id: 5, title: "Video 5", src: "https://via.placeholder.com/150" },
  { id: 6, title: "Video 6", src: "https://via.placeholder.com/150" },
  { id: 7, title: "Video 7", src: "https://via.placeholder.com/150" },
  { id: 8, title: "Video 8", src: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <VStack spacing={4}>
        <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="150px" />
        <SimpleGrid columns={[2, null, 4]} spacing={4} w="full">
          {thumbnails.map((thumbnail) => (
            <Box key={thumbnail.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={thumbnail.src} alt={thumbnail.title} />
              <Box p="6">
                <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                  {thumbnail.title}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;