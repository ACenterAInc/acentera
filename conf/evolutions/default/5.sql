# Add partner unique name


# --- !Ups
alter table partner add unique index idx_partner ( name );

# --- !Downs


alter table drop index idx_partner;


