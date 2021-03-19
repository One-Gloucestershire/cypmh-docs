import { withPrefix } from "gatsby-link";
import { Header } from "nhsuk-react-components";
import React from "react";

export const CYPMADocsHeader = () =>
    <Header>
        <Header.Container>
            <Header.Logo href={withPrefix("/")} />
            <Header.ServiceName href={withPrefix("/")}>CYPMH Documentation site</Header.ServiceName>
            <Header.Content>
                <Header.MenuToggle />
            </Header.Content>
        </Header.Container>
        <Header.Nav>
            <Header.NavItem href={withPrefix("/")} mobileOnly>
                Home
</Header.NavItem>
            <Header.NavItem href={withPrefix("/week-notes")}>Weeknotes</Header.NavItem>
            <Header.NavItem href={withPrefix("/adrs")}>Architectural Decision Records</Header.NavItem>
        </Header.Nav>
    </Header>
