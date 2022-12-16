import styled from "@emotion/styled";

const ListDiv = styled.div`
    padding-bottom: 1rem;
    max-width: 756px;
    margin: 0 auto !important;
    @media (max-width: 756px) {
        width: 90%;
    }
`;

const ListItem = styled.div`
    width: 100%;
    height: auto;
    min-height: 5px;
    background: #ffffff;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding: 5px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03), 0px 15px 12px rgba(0, 0, 0, 0.1);
    .title {
        margin-bottom: 5px;
    }
    .author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 0px;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            p {
                margin-left: 10px;
                margin-bottom: 0px;
                &.admin {
                    display: flex;
                    align-items: center;
                }
            }
        }
        p {
            color: darkgrey;
            margin-bottom: 0px;
            &.time {
                font-size: 10px;
            }
        }
    }
    a {
        color: black;
        text-decoration: none;
        .title {
            font-weight: bold;
        }
    }
`;

export { ListDiv, ListItem };
