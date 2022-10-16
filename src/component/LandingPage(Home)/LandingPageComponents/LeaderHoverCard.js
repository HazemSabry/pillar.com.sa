import React from "react";

import { HoverCard, Avatar, Text, Group, Anchor, Stack } from "@mantine/core";

import Leader1 from "../../../Images/leaders/leader-1.png";
import Leader2 from "../../../Images/leaders/leader-2.png";
import Leader3 from "../../../Images/leaders/leader-3.png";

function LeaderHoverCard(props) {
  return (
    <div className={"leader-container"}>
      <HoverCard shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target
          style={{
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
          }}
        >
          <Avatar src={props.leader.leaderImage} radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src={props.leader.leaderImage} radius="xl" />
            <div>
              <h1 className="leader-name-dropdown">
                {props.leader.leaderName}
              </h1>
            </div>
            <Stack spacing={5}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                {props.leaderName}
              </Text>
            </Stack>
          </Group>

          <Text size="0.6rem" mt="md">
            {props.leader.leaderAbout}
          </Text>

          <Group mt="md" spacing="xl">
            <h1 className="leader-position-dropdown">
              {props.leader.leaderPosition}
            </h1>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
      <h1 className="leader-name">{props.leader.leaderName}</h1>
      <h1 className="leader-position">{props.leader.leaderPosition}</h1>
    </div>
  );
}

export default LeaderHoverCard;
