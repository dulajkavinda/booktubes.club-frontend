import React from "react";

import styles from "./ClubProgress.module.css";
import { Progress } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export default function ClubProgress({users}) {

    const data = {
        "members": [
            {
                "userid": "001",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "0zYPmgHgOHWWt0X12iudnT0bNZ03",
                "userName": "Emma MacCay",
                "percentage": 52.10
            },
            {
                "userid": "003",
                "userName": "Beth Johns",
                "percentage": 73.00
            },
            {
                "userid": "004",
                "userName": "Ross Geller",
                "percentage": 24.00
            },
            {
                "userid": "005",
                "userName": "Emily Blunt",
                "percentage": 52.10
            },
            {
                "userid": "006",
                "userName": "Seth Myers",
                "percentage": 100
            }
        ]
    };

    return (
        <div className={styles.memberProgressModal}>
            <Heading className={styles.progressHeading} size='md'>Members' Progress</Heading>
            <VStack spacing={4}>
                {data.members.map((data) => (
                    <Stack>
                        <p className={styles.pName}>{data.userName}</p>
                        <Progress size='xs' value={data.percentage} />
                    </Stack>
                ))}
            </VStack>

        </div>
    );
}