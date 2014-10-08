# Add project roles indexing


# --- !Ups

CREATE INDEX `IDX_ROLE` ON PROJECT_USER_ROLES ( `USER_ID`,`PROJECT_TAGS_ID`);

create index idx_unique_active_user on `project_user` (`project_id`,`user_id`,`disable_date`);

# --- !Downs

ALTER TABLE PROJECT_USER_ROLES DROP INDEX IDX_ROLE;
