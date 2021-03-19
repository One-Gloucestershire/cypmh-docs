import { withPrefix } from "gatsby-link";
import { Footer } from "nhsuk-react-components";
import React from "react";

export const CYPMADocsFooter = () =>
    <Footer>
        <Footer.List>
            <Footer.ListItem href="https://www.nhs.uk/nhs-sites/">NHS sites</Footer.ListItem>
            <Footer.ListItem href="https://www.nhs.uk/contact-us/">Contact us</Footer.ListItem>
            <Footer.ListItem href={withPrefix("/sitemap.xml")}>Sitemap</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
