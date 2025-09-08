import { Text, Group } from "@mantine/core";
import { type FooterProps } from "../libs/Footer";
export default function Footer({ course, year, name, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {course}-{year} {name} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
}
