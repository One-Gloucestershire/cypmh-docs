import { Header } from "nhsuk-react-components";
import React from "react";

export const CYPMADocsHeader = () =>
    <Header>
        <Header.Container>
            <Header.Logo href="/" />
            <Header.ServiceName href="/">CYPMH Documentation site</Header.ServiceName>
            <Header.Content>
                <Header.MenuToggle />
            </Header.Content>
        </Header.Container>
        <Header.Nav>
            <Header.NavItem href="/" mobileOnly>
                Home
</Header.NavItem>
            <Header.NavItem href="/week-notes">Weeknotes</Header.NavItem>
            <Header.NavItem href="/adrs">Architectural Decision Records</Header.NavItem>
        </Header.Nav>
    </Header>
