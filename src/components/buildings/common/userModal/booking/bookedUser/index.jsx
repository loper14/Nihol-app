import React from "react";
import { Wrapper } from "./style";
import { Dropdown } from "antd";
import {
  ContactsOutlined,
  FileSearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const BookedUser = () => {
  let { t } = useTranslation();
  const items = [
    {
      label: (
        <Wrapper.DropdownItem>
          <ContactsOutlined style={{ fontSize: "18px" }} /> {t("activate")}
        </Wrapper.DropdownItem>
      ),
    },
    {
      label: (
        <Wrapper.DropdownItem>
          <FileSearchOutlined style={{ fontSize: "18px" }} /> {t("detailed")}
        </Wrapper.DropdownItem>
      ),
    },
    {
      label: (
        <Wrapper.DropdownItem>
          <EditOutlined style={{ fontSize: "18px" }} /> {t("edit_btn")}
        </Wrapper.DropdownItem>
      ),
    },
    {
      label: (
        <Wrapper.DropdownItem danger={true}>
          <DeleteOutlined style={{ fontSize: "18px" }} /> {t("delete_btn")}
        </Wrapper.DropdownItem>
      ),
    },
  ];

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.LabelWrapper>
          <Wrapper.Label>Alisherov Hamidullo</Wrapper.Label>

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Wrapper.Trigger>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="ellipsis"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
              </svg>
            </Wrapper.Trigger>
          </Dropdown>
        </Wrapper.LabelWrapper>
        <Wrapper.Wrap>
          <Wrapper.Item>
            <Wrapper.LabelDate>{t("start_date")}</Wrapper.LabelDate>
            <Wrapper.Date>6/17/2023</Wrapper.Date>
          </Wrapper.Item>
          <Wrapper.Item>
            <Wrapper.LabelDate>{t("end_date")}</Wrapper.LabelDate>
            <Wrapper.Date>6/28/2023</Wrapper.Date>
          </Wrapper.Item>
        </Wrapper.Wrap>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default BookedUser;
